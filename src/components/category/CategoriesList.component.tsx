import React, { Fragment, useEffect } from 'react';
import { take } from 'rxjs/operators';

import './Category.style.scss';
import { connector, ICategoriesListProps } from './componentProps';
import { ActionButtonComponent } from './../actionButton/ActionButton.component';
import { Socket } from './../../services/Socket.service';
import { ICategory } from './../../interfaces/categoryInterfaces';
import { ITodo } from './../../interfaces/todoInterfaces';
import { AddButtonComponent } from './../addButton/AddButton.component';
import { CategoryComponent } from './Category.component';

export const CategoriesListComponent: React.FC<ICategoriesListProps> = connector((props: ICategoriesListProps) => {
    useEffect(() => {
        Socket.emit('getCategoriesList');
        const categoriesList$ = Socket.on<{ total: number; categories: ICategory[] }>('gotCategoriesList');
        categoriesList$.subscribe(
            ({ categories }) => {
                console.log('getCategoriesList', categories);
                props.setCategoriesList({ categories });
            },
            (err) => {
                console.error('err', err);
            },
        );

        Socket.emit('getTodosList');
        const totoList$ = Socket.on<{ total: number; todos: ITodo[] }>('gotTodosList');
        totoList$.subscribe(
            ({ todos }) => {
                console.log('getTodosList', todos);

                props.setTodosList({ todos });
            },
            (err) => {
                console.error('err', err);
            },
        );

        return () => {
            Socket.removeEventListener('gotCategoriesList');
            Socket.removeEventListener('gotTodosList');
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const categoryCreating = (title: string) => {
        Socket.emit('createCategory', { title });
        const category$ = Socket.on<ICategory>('createdCategory');
        category$.pipe(take(1)).subscribe(
            (res) => {
                props.addCategory({ category: res });
            },
            (err) => {
                console.error('err', err);
            },
        );
    };

    return (
        <Fragment>
            <div className="row category__list">
                {props.categoryState.categoriesList.map((category) => (
                    // @ts-ignore
                    <CategoryComponent key={category.id} categoryId={category.id} categoryTitle={category.title} />
                ))}

                <div className="col s12 m3 category__item">
                    <AddButtonComponent text={'Create Category'} placeholder={'Enter Title'} onCreate={categoryCreating} />
                </div>
            </div>

            <ActionButtonComponent />
        </Fragment>
    );
});
