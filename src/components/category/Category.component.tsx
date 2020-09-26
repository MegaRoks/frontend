import React from 'react';

import './Category.style.scss';
import { TodoComponent } from './../todo/Todo.component';

export const CategoryComponent = () => {
    return (
        <div className="col s12 m3 category__item">
            <div className="card-panel category__title">
                <span className="white-text">Category Title</span>
            </div>

            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
            <TodoComponent />
        </div>
    );
};
