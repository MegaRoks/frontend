import { IActionCreator } from '../../interfaces';
import { SET_LOADER } from './../../types/loaderTypes';
import { ILoaderPayload } from './../../interfaces/loaderInterfaces';

const initialState: ILoaderPayload = {
    isLoader: false,
};

export const loaderReducer = (state = initialState, action: IActionCreator<ILoaderPayload>): ILoaderPayload => {
    switch (action.type) {
        case SET_LOADER:
            return { isLoader: action.payload.isLoader };
        default:
            return state;
    }
};
