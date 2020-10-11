import { connect } from 'react-redux';

import { Socket } from './../../services/Socket.service';
import { RootDispatchType, RootStateType } from './../../redux';
import { addTask, removeTask, setTasksList } from './../../redux/actions/taskActions';
import { ITask } from './../../interfaces/taskInterface.ts';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    authState: state.authState,
    taskState: state.taskState,
    selectTodo: state.todoState.selectedTodo,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    addTasksListener: () => dispatch(addTasksListener()),
    removeTasksListener: () => dispatch(removeTasksListener()),
    createTask: (title: React.ReactText) => dispatch(createTask(title)),
    deleteTask: (taskId: string) => dispatch(deleteTask(taskId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const addTasksListener = () => {
    return (dispatch: RootDispatchType, getState: () => RootStateType) => {
        const todoId = getState().todoState.selectedTodo?.id;
        Socket.emit('getTasksList', { todoId });
        Socket.on<{ total: number; tasks: ITask[] }>('gotTasksList').subscribe(
            ({ total, tasks }) => {
                console.log('total', total);

                console.log('gotTasksList', tasks);
                dispatch(setTasksList({ tasks }));
            },
            (err) => {
                console.error('err', err);
            },
        );
        Socket.on<ITask>('createdTask').subscribe(
            (task) => {
                console.log('createdTask', task);
                dispatch(addTask({ task }));
            },
            (err) => {
                console.error('err', err);
            },
        );
        Socket.on<ITask>('deletedTask').subscribe(
            (task) => {
                console.log('deletedTask', task);
                dispatch(removeTask({ task }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};

const removeTasksListener = () => {
    return () => {
        Socket.removeEventsListener('gotTasksList', 'createdTask', 'deletedTask');
    };
};

const createTask = (title: React.ReactText) => {
    return (dispatch: RootDispatchType, getState: () => RootStateType) => {
        const todoId = getState().todoState.selectedTodo?.id;
        Socket.emit('createTask', { title, todoId });
    };
};

const deleteTask = (id: string) => {
    return (dispatch: RootDispatchType, getState: () => RootStateType) => {
        const todoId = getState().todoState.selectedTodo?.id;
        Socket.emit('deleteTask', { id, todoId });
    };
};
