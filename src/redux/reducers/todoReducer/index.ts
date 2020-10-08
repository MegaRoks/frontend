import { IActionCreator } from './../../interfaces';
import { ITodoPayload, ITodosPayload, ITodoState } from './../../interfaces/todoInterfaces';
import { ADD_TODO, SET_TODOS_LIST, REMOVE_TODO, UPDATE_TODO, SELECT_TODO } from './../../types/todoTypes';

const initialState: ITodoState = {
    todosList: [],
    selectedTodo: null,
};

export const todoReducer = (state: ITodoState = initialState, action: IActionCreator<ITodoPayload & ITodosPayload>): ITodoState => {
    switch (action.type) {
        case SET_TODOS_LIST:
            return {
                ...state,
                todosList: action.payload.todos,
            };
        case ADD_TODO: {
            return {
                ...state,
                todosList: [...state.todosList, action.payload.todo],
            };
        }
        case UPDATE_TODO: {
            return {
                ...state,
                todosList: [...state.todosList.filter(({ id }) => id === action.payload.todo.id), action.payload.todo],
            };
        }
        case REMOVE_TODO: {
            return {
                ...state,
                todosList: [...state.todosList.filter(({ id }) => id !== action.payload.todo.id)],
            };
        }
        case SELECT_TODO: {
            return {
                ...state,
                selectedTodo: action.payload.todo,
            };
        }
        default:
            return state;
    }
};
