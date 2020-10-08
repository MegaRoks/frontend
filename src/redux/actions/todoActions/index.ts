import { ITodoPayload, ITodosPayload } from './../../interfaces/todoInterfaces';
import { IActionCreator } from './../../interfaces';
import { ADD_TODO, SET_TODOS_LIST, REMOVE_TODO, UPDATE_TODO, SELECT_TODO } from './../../types/todoTypes';

export const setTodosList = (payload: ITodosPayload): IActionCreator<ITodosPayload> => {
    return {
        type: SET_TODOS_LIST,
        payload,
    };
};

export const addTodo = (payload: ITodoPayload): IActionCreator<ITodoPayload> => {
    return {
        type: ADD_TODO,
        payload,
    };
};

export const updateTodo = (payload: ITodoPayload): IActionCreator<ITodoPayload> => {
    return {
        type: UPDATE_TODO,
        payload,
    };
};

export const removeTodo = (payload: ITodoPayload): IActionCreator<ITodoPayload> => {
    return {
        type: REMOVE_TODO,
        payload,
    };
};

export const selectTodo = (payload: ITodoPayload): IActionCreator<ITodoPayload> => {
    return {
        type: SELECT_TODO,
        payload,
    };
};
