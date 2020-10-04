import { IActionCreator } from './../../interfaces';
import { ITodoPayload, ITodosPayload, ITodoState } from './../../interfaces/todoInterfaces';
import { ADD_TODO, SET_TODOS_LIST, REMOVE_TODO, UPDATE_TODO } from './../../types/todoTypes';

const initialState: ITodoState = {
    todosList: [],
};

export const todoReducer = (state: ITodoState = initialState, action: IActionCreator<ITodoPayload & ITodosPayload>): ITodoState => {
    switch (action.type) {
        case SET_TODOS_LIST:
            return {
                todosList: action.payload.todos,
            };
        case ADD_TODO: {
            console.log(action.payload.todo);
            
            return {
                todosList: [...state.todosList, action.payload.todo],
            };
        }
        case UPDATE_TODO: {
            return {
                todosList: [...state.todosList.filter(({ id }) => id === action.payload.todo.id), action.payload.todo],
            };
        }
        case REMOVE_TODO: {
            return {
                todosList: [...state.todosList.filter(({ id }) => id !== action.payload.todo.id)],
            };
        }
        default:
            return state;
    }
};
