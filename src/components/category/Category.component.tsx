import React from 'react';

import './Category.style.scss';
import { ICategoryProps } from './Category.interface';
import { connector } from './Category.service';
import { AddButtonComponent } from './../addButton/AddButton.component';
import { TodoComponent } from './../todo/Todo.component';

export const CategoryComponent = connector(({ categoryId, categoryTitle, todoState, createTodo }: ICategoryProps) => {
    const todoCreating = (title: React.ReactText) => {
        createTodo(title, categoryId);
    };

    return (
        <div className="col s12 m3 category__item">
            <div className="card-panel category__title">
                <span className="white-text">{categoryTitle}</span>
            </div>

            {todoState.todosList
                .filter((todo) => todo.categoryId && todo.categoryId === categoryId)
                .map((todo) => (
                    <TodoComponent key={todo.id} todoId={todo.id} todoTitle={todo.title} />
                ))}

            <AddButtonComponent text={'Create Todo'} placeholder={'Enter Title'} onCreate={todoCreating} />
        </div>
    );
});
