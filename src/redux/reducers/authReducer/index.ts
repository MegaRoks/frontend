import { IActionCreator } from '../../interfaces';
import { IAuthPayload } from '../../interfaces/authInterfaces';
import { SET_AUTH } from '../../types/auhTypes';

const initialState: IAuthPayload = {
    isAuth: false,
    token: '',
};

export const authReducer = (state: IAuthPayload = initialState, action: IActionCreator<IAuthPayload>): IAuthPayload => {
    switch (action.type) {
        case SET_AUTH:
            return {
                isAuth: action.payload.isAuth,
                token: action.payload.token,
            };
        default:
            return state;
    }
};
