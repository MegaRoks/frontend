import { ILoaderAction, ILoaderPayload } from './../../interfaces/loaderInterfaces';
import { SET_LOADER } from './../../types/loaderTypes';

export const setLoader = (payload: ILoaderPayload): ILoaderAction => {
    return {
        type: SET_LOADER,
        payload,
    };
};
