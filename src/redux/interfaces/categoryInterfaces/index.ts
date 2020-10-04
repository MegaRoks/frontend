import { ICategory } from './../../../interfaces/categoryInterfaces';

export interface ICategoryPayload {
    readonly category: ICategory;
}

export interface ICategoriesPayload {
    readonly categories: ICategory[];
}


export interface ICategoriesState {
    readonly categoriesList: ICategory[];
}
