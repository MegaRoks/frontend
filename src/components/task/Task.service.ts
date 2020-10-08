import { connect } from 'react-redux';
import { take } from 'rxjs/operators';

import { Socket } from './../../services/Socket.service';
import { RootDispatchType, RootStateType } from './../../redux';
import { addTask, setTasksList } from './../../redux/actions/taskActions';
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
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const addTasksListener = () => {
    return (dispatch: RootDispatchType, getState: () => RootStateType) => {
        const todoId = getState().todoState.selectedTodo?.id;
        Socket.emit('getTasksList', { todoId });
        const totoList$ = Socket.on<{ total: number; tasks: ITask[] }>('gotTasksList');
        totoList$.subscribe(
            ({ total, tasks }) => {
                console.log('total', total);
                
                console.log('gotTasksList', tasks);
                dispatch(setTasksList({ tasks }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};

const removeTasksListener = () => {
    return () => {
        Socket.removeEventListener('gotTasksList');
    };
};

const createTask = (title: React.ReactText) => {
    return (dispatch: RootDispatchType, getState: () => RootStateType) => {
        const todoId = getState().todoState.selectedTodo?.id;    
        Socket.emit('createTask', { title, todoId });
        const category$ = Socket.on<ITask>('createdTask');
        category$.pipe(take(1)).subscribe(
            (task) => {
                console.log('createdTask', task);
                dispatch(addTask({ task }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};
