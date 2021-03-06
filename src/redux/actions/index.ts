import { ITaskPayload, ITasksPayload } from './../interfaces/taskInterfaces';
import { IActionCreator } from './../interfaces';
import { IAuthPayload } from './../interfaces/authInterfaces';
import { ICategoriesPayload, ICategoryPayload } from './../interfaces/categoryInterfaces';
import { IErrorPayload } from './../interfaces/errorInterfaces';
import { ILoaderPayload } from './../interfaces/loaderInterfaces';
import { ITodoPayload, ITodosPayload } from './../interfaces/todoInterfaces';
import { IUserPayload } from './../interfaces/userInterfaces';

export type RootActionType =
    | IActionCreator<IAuthPayload>
    | IActionCreator<IErrorPayload>
    | IActionCreator<ILoaderPayload>
    | IActionCreator<IUserPayload>
    | IActionCreator<ITodosPayload>
    | IActionCreator<ITodoPayload>
    | IActionCreator<ICategoryPayload>
    | IActionCreator<ICategoriesPayload>
    | IActionCreator<ITaskPayload>
    | IActionCreator<ITasksPayload>;

