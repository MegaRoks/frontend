import { connect } from 'react-redux';

import { Socket } from './../../services/Socket.service';
import { ICategory } from './../../interfaces/categoryInterfaces';
import { ITodo } from './../../interfaces/todoInterfaces';
import { RootDispatchType, RootStateType } from './../../redux';
import { setCategoriesList, addCategory, updateCategory, removeCategory } from './../../redux/actions/categoryActions';
import { addTodo, setTodosList } from './../../redux/actions/todoActions';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    authState: state.authState,
    todoState: state.todoState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    addCategoriesListener: () => dispatch(addCategoriesListener()),
    addTodosListener: () => dispatch(addTodosListener()),
    removeCategoriesListener: () => dispatch(removeCategoriesListener()),
    removeTodosListener: () => dispatch(removeTodosListener()),
    createCategory: (title: React.ReactText) => dispatch(createCategory(title)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const addCategoriesListener = () => {
    return (dispatch: RootDispatchType) => {
        Socket.emit('getCategoriesList');
        Socket.on<{ total: number; categories: ICategory[] }>('gotCategoriesList').subscribe(
            ({ categories }) => {
                console.log('getCategoriesList', categories);
                dispatch(setCategoriesList({ categories }));
            },
            (err) => {
                console.error('err', err);
            },
        );
        Socket.on<ITodo>('createdTodo').subscribe(
            (todo) => {
                dispatch(addTodo({ todo }));
            },
            (err) => {
                console.error('err', err);
            },
        );
        Socket.on<ICategory>('createdCategory').subscribe(
            (category) => {
                console.log('createCategory', category);
                dispatch(addCategory({ category }));
            },
            (err) => {
                console.error('err', err);
            },
        );
        Socket.on<ICategory>('updatedCategory').subscribe(
            (category) => {
                console.log('updatedCategory', category);
                dispatch(updateCategory({ category }));
            },
            (err) => {
                console.error('err', err);
            },
        );
        Socket.on<ICategory>('deletedCategory').subscribe(
            (category) => {
                console.log('deletedCategory', category);
                dispatch(removeCategory({ category }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};

const removeCategoriesListener = () => {
    return () => {
        Socket.removeEventsListener('gotCategoriesList', 'createdTodo', 'createdCategory');
    };
};

const addTodosListener = () => {
    return (dispatch: RootDispatchType) => {
        Socket.emit('getTodosList');
        Socket.on<{ total: number; todos: ITodo[] }>('gotTodosList').subscribe(
            ({ todos }) => {
                console.log('getTodosList', todos);
                dispatch(setTodosList({ todos }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};

const removeTodosListener = () => {
    return () => {
        Socket.removeEventsListener('gotTodosList');
    };
};

const createCategory = (title: React.ReactText) => {
    return () => {
        Socket.emit('createCategory', { title });
    };
};
