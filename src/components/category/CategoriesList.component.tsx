import React, { Fragment } from 'react';

import './Category.style.scss';
import { CategoryComponent } from './Category.component';
import { ActionButtonComponent } from './../actionButton/ActionButton.component';

export const CategoriesListComponent: React.FC = () => {
    return (
        <Fragment>
            <div className="row category__list">
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
            </div>
            <ActionButtonComponent />
        </Fragment>
    );
};
