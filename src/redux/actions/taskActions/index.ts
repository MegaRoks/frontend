import { ITaskPayload, ITasksPayload } from './../../interfaces/taskInterfaces';
import { IActionCreator } from './../../interfaces';
import { ADD_TASK, SET_TASKS_LIST, REMOVE_TASK, UPDATE_TASK } from './../../types/taskTypes';

export const setTasksList = (payload: ITasksPayload): IActionCreator<ITasksPayload> => {
    return {
        type: SET_TASKS_LIST,
        payload,
    };
};

export const addTask = (payload: ITaskPayload): IActionCreator<ITaskPayload> => {
    return {
        type: ADD_TASK,
        payload,
    };
};

export const updateTask = (payload: ITaskPayload): IActionCreator<ITaskPayload> => {
    return {
        type: UPDATE_TASK,
        payload,
    };
};

export const removeTask = (payload: ITaskPayload): IActionCreator<ITaskPayload> => {
    return {
        type: REMOVE_TASK,
        payload,
    };
};
