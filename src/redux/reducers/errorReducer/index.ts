import { SET_ERROR } from './../../types/errorTypes';
import { IErrorAction, IErrorPayload } from './../../interfaces/errorInterfaces';

const initialState: IErrorPayload = {
    isError: false,
    errorMessage: '',
};

export const errorReducer = (state = initialState, action: IErrorAction): IErrorPayload => {
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
