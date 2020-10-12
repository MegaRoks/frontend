import { connect } from 'react-redux';

import { Socket } from './../../services/Socket.service';
import { RootDispatchType, RootStateType } from './../../redux';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    todoState: state.todoState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    createTodo: (title: React.ReactText, categoryId: string) => dispatch(createTodo(title, categoryId)),
    updateCategory: (categoryId: string, title: React.ReactText) => dispatch(updateCategory(categoryId, title)),
    deleteCategory: (categoryId: string) => dispatch(deleteCategory(categoryId)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const createTodo = (title: React.ReactText, categoryId: string) => {
    return () => {
        Socket.emit('createTodo', { title, categoryId });
    };
};

const updateCategory = (id: string, title: React.ReactText) => {
    return () => {  
        Socket.emit('updateCategory', { id, title });
    };
};

const deleteCategory = (id: string) => {
    return () => {
        Socket.emit('deleteCategory', { id });
    };
};
