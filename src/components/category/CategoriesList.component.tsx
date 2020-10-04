import React, { Fragment, useEffect } from 'react';

import './Category.style.scss';
import { connector, ICategoryProps } from './componentProps';
import { ActionButtonComponent } from './../actionButton/ActionButton.component';
import { Socket } from './../../services/Socket.service';
import { ICategory } from './../../interfaces/categoryInterfaces';
import { AddButtonComponent } from './../addButton/AddButton.component';
import { TodoComponent } from './../todo/Todo.component';

export const CategoriesListComponent: React.FC = connector(({ authState, categoryState, setCategoriesList, addCategory }: ICategoryProps) => {
    useEffect(() => {
        Socket.emit('getCategoriesList');
        const categoriesList$ = Socket.on<{ total: number; categories: ICategory[] }>('gotCategoriesList');
        categoriesList$.subscribe(
            ({ categories }) => {
                console.log('CategoriesList', categories);
                setCategoriesList({ categories });
            },
            (err) => {
                console.error('err', err);
            },
        );

        return () => {
            Socket.removeEventListener('gotCategoriesList');
        };
    }, [setCategoriesList]);

    const categoryCreating = (title: string) => {
        Socket.emit('createCategory', { title });
        const category$ = Socket.on<ICategory>('createdCategory');
        category$.subscribe(
            (res) => {
                console.log('New Category', res);
                addCategory({ category: res });
            },
            (err) => {
                console.error('err', err);
            },
        );
    };

    const todoCreating = (title: string) => {
        Socket.emit('createTodo', { title });
        const todo$ = Socket.on<ICategory>('createdTodo');
        todo$.subscribe(
            (res) => {
                console.log('New Todo', res);
            },
            (err) => {
                console.error('err', err);
            },
        );
    };

    return (
        <Fragment>
            <div className="row category__list">
                {categoryState.categoriesList.map((category) => (
                    <div className="col s12 m3 category__item">
                        <div className="card-panel category__title">
                            <span className="white-text">Title</span>
                        </div>
                        <TodoComponent />
                        <AddButtonComponent onCreate={todoCreating} />
                    </div>
                ))}

                <div className="col s12 m3 category__item">
                    <AddButtonComponent onCreate={categoryCreating} />
                </div>
            </div>

            <ActionButtonComponent />
        </Fragment>
    );
});
