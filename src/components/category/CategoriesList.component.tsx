import React, { Fragment, useEffect } from 'react';

import './Category.style.scss';
import { ICategoriesListProps } from './Category.interface';
import { CategoryComponent } from './Category.component';
import { connector } from './Category.service';
import { ActionButtonComponent } from './../actionButton/ActionButton.component';
import { AddButtonComponent } from './../addButton/AddButton.component';

export const CategoriesListComponent = connector((props: ICategoriesListProps) => {
    useEffect(() => {
        props.addCategoriesListener();
        props.addTodosListener();

        return () => {
            props.removeCategoriesListener();
            props.removeTodosListener();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const categoryCreating = (title: React.ReactText) => {
        props.createCategory(title);
    };

    return (
        <Fragment>
            <div className="row category__list">
                {props.categoryState.categoriesList.map((category) => (
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
