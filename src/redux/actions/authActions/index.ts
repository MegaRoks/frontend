import { IActionCreator } from './../../interfaces';
import { IAuthPayload } from './../../interfaces/authInterfaces';
import { SET_AUTH } from './../../types/auhTypes';

export const setAuth = (payload: IAuthPayload): IActionCreator<IAuthPayload> => {
    return {
        type: SET_AUTH,
        payload,
    };
};
