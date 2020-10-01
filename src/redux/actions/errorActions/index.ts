import { IActionCreator } from './../../interfaces';
import { IErrorPayload } from './../../interfaces/errorInterfaces';
import { SET_ERROR } from './../../types/errorTypes';

export const setError = (payload: IErrorPayload): IActionCreator<IErrorPayload> => {
    return {
        type: SET_ERROR,
        payload,
    };
};
