import React from 'react';

import './Category.style.scss';
import { ICategoryProps } from './Category.interface';
import { connector } from './Category.service';
import { AddFormComponent } from './../addFrom/AddFrom.component';
import { TodoComponent } from './../todo/Todo.component';
import { EditFormComponent } from './../editForm/EditForm.component';

export const CategoryComponent = connector((props: ICategoryProps) => {
    const todoCreating = (title: React.ReactText) => {
        props.createTodo(title, props.categoryId);
    };

    const categoryUpdating = (categoryId: string, value: React.ReactText) => {
        props.updateCategory(categoryId, value);
    };

    const categoryRemoving = (categoryId: string) => {
        props.deleteCategory(categoryId);
    };

    return (
        <div className="col s12 m3 category__item">
            <div className="card-panel category__container">
                <EditFormComponent id={props.categoryId} title={props.categoryTitle} onSave={categoryUpdating} onRemove={categoryRemoving}>
                    <span className="category__title">{props.categoryTitle}</span>
                </EditFormComponent>
            </div>

            {props.todoState.todosList
                .filter((todo) => todo.categoryId && todo.categoryId === props.categoryId)
                .map((todo) => (
                    <TodoComponent key={todo.id} todoId={todo.id} todoTitle={todo.title} />
                ))}

            <AddFormComponent text={'Create Todo'} placeholder={'Enter Title'} onCreate={todoCreating} />
        </div>
    );
});
