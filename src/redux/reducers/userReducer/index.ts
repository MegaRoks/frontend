import { SET_USER } from './../../types/userTypes';
import { IActionCreator } from './../../interfaces';
import { IUserPayload } from './../../interfaces/userInterfaces';

const initialState: IUserPayload = {
    user: null,
};

export const userReducer = (state: IUserPayload = initialState, action: IActionCreator<IUserPayload>): IUserPayload => {
    switch (action.type) {
        case SET_USER:
            return {
                user: action.payload.user,
            };
        default:
            return state;
    }
};
