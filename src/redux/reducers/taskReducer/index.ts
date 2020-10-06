import { IActionCreator } from './../../interfaces';
import { ITaskPayload, ITasksPayload, ITaskState } from './../../interfaces/taskInterfaces';
import { ADD_TASK, SET_TASKS_LIST, REMOVE_TASK, UPDATE_TASK } from './../../types/taskTypes';

const initialState: ITaskState = {
    tasksList: [],
};

export const taskReducer = (state: ITaskState = initialState, action: IActionCreator<ITaskPayload & ITasksPayload>): ITaskState => {
    switch (action.type) {
        case SET_TASKS_LIST:
            return {
                tasksList: action.payload.tasks,
            };
        case ADD_TASK: {
            console.log(action.payload.task);

            return {
                tasksList: [...state.tasksList, action.payload.task],
            };
        }
        case UPDATE_TASK: {
            return {
                tasksList: [...state.tasksList.filter(({ id }) => id === action.payload.task.id), action.payload.task],
            };
        }
        case REMOVE_TASK: {
            return {
                tasksList: [...state.tasksList.filter(({ id }) => id !== action.payload.task.id)],
            };
        }
        default:
            return state;
    }
};