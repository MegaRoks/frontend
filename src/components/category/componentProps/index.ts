import { connect, ConnectedProps } from 'react-redux';

import { RootStateType } from './../../../redux';
import { setCategoriesList, addCategory, updateCategory, removeCategory } from './../../../redux/actions/categoryActions';
import { setTodosList, addTodo, updateTodo, removeTodo } from './../../../redux/actions/todoActions';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    authState: state.authState,
    todoState: state.todoState,
});

const mapDispatchToProps = {
    addCategory,
    updateCategory,
    removeCategory,
    setCategoriesList,
    setTodosList,
    addTodo,
    updateTodo,
    removeTodo,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface ICategoriesListProps extends PropsFromRedux {}
export interface ICategoryProps extends PropsFromRedux {
    readonly categoryId: string;
    readonly categoryTitle: string;
}
