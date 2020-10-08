import { ITodo } from './../../../interfaces/todoInterfaces';

export interface ITodoPayload {
    readonly todo: ITodo;
}

export interface ITodosPayload {
    readonly todos: ITodo[];
}

export interface ITodoState {
    readonly todosList: ITodo[];
    readonly selectedTodo: ITodo | null;
}
