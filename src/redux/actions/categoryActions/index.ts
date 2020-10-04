import { ADD_CATEGORY, REMOVE_CATEGORY, SET_CATEGORY_LIST, UPDATE_CATEGORY } from './../../types/categoryTypes';
import { IActionCreator } from './../../interfaces';
import { ICategoriesPayload, ICategoryPayload } from './../../interfaces/categoryInterfaces';

export const setCategoriesList = (payload: ICategoriesPayload): IActionCreator<ICategoriesPayload> => {
    return {
        type: SET_CATEGORY_LIST,
        payload,
    };
};

export const addCategory = (payload: ICategoryPayload): IActionCreator<ICategoryPayload> => {
    return {
        type: ADD_CATEGORY,
        payload,
    };
};

export const updateCategory = (payload: ICategoryPayload): IActionCreator<ICategoryPayload> => {
    return {
        type: UPDATE_CATEGORY,
        payload,
    };
};

export const removeCategory = (payload: ICategoryPayload): IActionCreator<ICategoryPayload> => {
    return {
        type: REMOVE_CATEGORY,
        payload,
    };
};
