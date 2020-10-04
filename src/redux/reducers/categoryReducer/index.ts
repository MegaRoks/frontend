import { IActionCreator } from './../../interfaces';
import { ICategoriesPayload, ICategoriesState, ICategoryPayload } from './../../interfaces/categoryInterfaces';
import { SET_CATEGORY_LIST, ADD_CATEGORY, REMOVE_CATEGORY, UPDATE_CATEGORY } from './../../types/categoryTypes';

const initialState: ICategoriesState = {
    categoriesList: [],
};

export const categoryReducer = (
    state: ICategoriesState = initialState,
    action: IActionCreator<ICategoryPayload & ICategoriesPayload>,
): ICategoriesState => {
    switch (action.type) {
        case SET_CATEGORY_LIST:
            return {
                categoriesList: action.payload.categories,
            };
        case ADD_CATEGORY:
            return {
                categoriesList: [...state.categoriesList, action.payload.category],
            };
        case UPDATE_CATEGORY:
            return {
                categoriesList: [...state.categoriesList.filter(({ id }) => id !== action.payload.category.id), action.payload.category],
            };
        case REMOVE_CATEGORY:
            return {
                categoriesList: [...state.categoriesList.filter(({ id }) => id !== action.payload.category.id)],
            };
        default:
            return state;
    }
};
