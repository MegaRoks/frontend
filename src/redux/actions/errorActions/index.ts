import { IErrorAction, IErrorPayload } from './../../interfaces/errorInterfaces';
import { SET_ERROR } from './../../types/errorTypes';

export const setError = (payload: IErrorPayload): IErrorAction => {
    return {
        type: SET_ERROR,
        payload,
    };
};
