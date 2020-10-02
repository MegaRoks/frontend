import { IUserPayload } from './../../interfaces/userInterfaces';
import { IActionCreator } from './../../interfaces';
import { SET_USER } from './../../types/userTypes';

export const setUser = (payload: IUserPayload): IActionCreator<IUserPayload> => {
    return {
        type: SET_USER,
        payload,
    };
};
