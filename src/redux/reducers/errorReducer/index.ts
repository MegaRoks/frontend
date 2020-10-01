import { IActionCreator } from '../../interfaces';
import { SET_ERROR } from './../../types/errorTypes';
import { IErrorPayload } from './../../interfaces/errorInterfaces';

const initialState: IErrorPayload = {
    isError: false,
    errorMessage: '',
};

export const errorReducer = (state: IErrorPayload = initialState, action: IActionCreator<IErrorPayload>): IErrorPayload => {
    switch (action.type) {
        case SET_ERROR:
            return {
                isError: action.payload.isError,
                errorMessage: action.payload.errorMessage,
            };
        default:
            return state;
    }
};
