import { connect } from 'react-redux';
import { take } from 'rxjs/operators';

import { Socket } from './../../services/Socket.service';
import { ITodo } from './../../interfaces/todoInterfaces';
import { RootDispatchType, RootStateType } from './../../redux';
import { addTodo } from './../../redux/actions/todoActions';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    todoState: state.todoState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    createTodo: (title: React.ReactText, categoryId: string) => dispatch(createTodo(title, categoryId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const createTodo = (title: React.ReactText, categoryId: string) => {
    return (dispatch: RootDispatchType) => {
        Socket.emit('createTodo', { title, categoryId });
        const todo$ = Socket.on<ITodo>('createdTodo');
        todo$.pipe(take(1)).subscribe(
            (todo) => {
                dispatch(addTodo({ todo }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};
