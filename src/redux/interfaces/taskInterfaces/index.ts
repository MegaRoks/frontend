import { ITask } from './../../../interfaces/taskInterface.ts';

export interface ITaskPayload {
    readonly task: ITask;
}

export interface ITasksPayload {
    readonly tasks: ITask[];
}

export interface ITaskState {
    readonly tasksList: ITask[];
}
