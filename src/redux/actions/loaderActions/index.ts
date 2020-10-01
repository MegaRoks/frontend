import { IActionCreator } from './../../interfaces';
import { ILoaderPayload } from './../../interfaces/loaderInterfaces';
import { SET_LOADER } from './../../types/loaderTypes';

export const setLoader = (payload: ILoaderPayload): IActionCreator<ILoaderPayload> => {
    return {
        type: SET_LOADER,
        payload,
    };
};
