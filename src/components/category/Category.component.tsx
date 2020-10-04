import React from 'react';
import { take } from 'rxjs/operators';

import './Category.style.scss';
import { connector, ICategoryProps } from './componentProps';
import { Socket } from './../../services/Socket.service';
import { AddButtonComponent } from './../addButton/AddButton.component';
import { TodoComponent } from './../todo/Todo.component';
import { ITodo } from './../../interfaces/todoInterfaces';

export const CategoryComponent: React.FC<ICategoryProps> = connector(({ categoryId, categoryTitle, addTodo, todoState }: ICategoryProps) => {
    const todoCreating = (title: string) => {
        Socket.emit('createTodo', { title, categoryId });
        const todo$ = Socket.on<ITodo>('createdTodo');
        todo$.pipe(take(1)).subscribe(
            (res) => {
                addTodo({ todo: res });
            },
            (err) => {
                console.error('err', err);
            },
        );
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
