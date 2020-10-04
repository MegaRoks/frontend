import { IActionCreator } from './../../interfaces';
import { IAuthPayload, IAuthState } from './../../interfaces/authInterfaces';
import { LOGIN, LOGOUT } from './../../types/authTypes';

const initialState: IAuthState = {
    isAuth: false,
    token: null,
};

export const authReducer = (state: IAuthState = initialState, action: IActionCreator<IAuthPayload>): IAuthState => {
    switch (action.type) {
        case LOGIN:
            return {
                isAuth: true,
                token: action.payload.token,
            };
        case LOGOUT:
            return {
                isAuth: false,
                token: action.payload.token,
            };
        default:
            return state;
    }
};
