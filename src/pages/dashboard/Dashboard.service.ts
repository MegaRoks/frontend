import { connect } from 'react-redux';
import { take } from 'rxjs/operators';

import { Socket } from './../../services/Socket.service';
import { ICategory } from './../../interfaces/categoryInterfaces';
import { ITodo } from './../../interfaces/todoInterfaces';
import { RootDispatchType, RootStateType } from './../../redux';
import { setCategoriesList, addCategory } from './../../redux/actions/categoryActions';
import { setTodosList } from './../../redux/actions/todoActions';

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
        const categoriesList$ = Socket.on<{ total: number; categories: ICategory[] }>('gotCategoriesList');
        categoriesList$.subscribe(
            ({ categories }) => {
                console.log('getCategoriesList', categories);
                dispatch(setCategoriesList({ categories }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};

const removeCategoriesListener = () => {
    return () => {
        Socket.removeEventsListener('gotCategoriesList');
    };
};

const addTodosListener = () => {
    return (dispatch: RootDispatchType) => {
        Socket.emit('getTodosList');
        const totoList$ = Socket.on<{ total: number; todos: ITodo[] }>('gotTodosList');
        totoList$.subscribe(
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
    return (dispatch: RootDispatchType) => {
        Socket.emit('createCategory', { title });
        const category$ = Socket.on<ICategory>('createdCategory');
        category$.pipe(take(1)).subscribe(
            (category) => {
                console.log('createCategory', category);
                dispatch(addCategory({ category }));
            },
            (err) => {
                console.error('err', err);
            },
        );
    };
};

