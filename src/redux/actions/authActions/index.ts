import { IActionCreator } from './../../interfaces';
import { IAuthPayload } from './../../interfaces/authInterfaces';
import { LOGIN, LOGOUT } from './../../types/authTypes';

export const login = (payload: IAuthPayload): IActionCreator<IAuthPayload> => {
    return {
        type: LOGIN,
        payload,
    };
};

export const logout = (payload: IAuthPayload): IActionCreator<IAuthPayload> => {
    return {
        type: LOGOUT,
        payload,
    };
};
