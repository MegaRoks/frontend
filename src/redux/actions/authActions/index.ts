import { IActionCreator } from './../../interfaces';
import { IAuthPayload } from './../../interfaces/authInterfaces';
import { SET_AUTH } from './../../types/authTypes';

export const setAuth = (payload: IAuthPayload): IActionCreator<IAuthPayload> => {
    return {
        type: SET_AUTH,
        payload,
    };
};
