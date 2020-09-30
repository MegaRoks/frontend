import { SET_LOADER } from './../../types/loaderTypes';
import { ILoaderAction, ILoaderPayload } from './../../interfaces/loaderInterfaces';

const initialState: ILoaderPayload = {
    isLoader: false,
};

export const loaderReducer = (state = initialState, action: ILoaderAction): ILoaderPayload => {
    switch (action.type) {
        case SET_LOADER:
            return { isLoader: action.payload.isLoader };

        default:
            return state;
    }
};
