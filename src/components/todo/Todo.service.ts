import { connect } from 'react-redux';

import { RootDispatchType, RootStateType } from './../../redux';
import { selectTodo } from './../../redux/actions/todoActions';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    authState: state.authState,
    taskState: state.taskState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    selectedTodo: (todoId: string) => dispatch(selectedTodo(todoId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const selectedTodo = (todoId: string) => {
    return (dispatch: RootDispatchType, getState: () => RootStateType) => {
        const todos = getState().todoState.todosList;
        const todo = todos.find((t: any) => t.id === todoId);
        todo && dispatch(selectTodo({ todo }));
    };
};
