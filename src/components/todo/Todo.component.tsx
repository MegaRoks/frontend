import React from 'react';
import Modal from 'react-modal';

import './Todo.style.scss';
import { connector } from './Todo.service';
import { ITodoProps } from './Todo.interface';

Modal.setAppElement('#root');

export const TodoComponent = connector(({ todoId, todoTitle, selectedTodo }: ITodoProps) => {
    const openModal = () => {
        selectedTodo(todoId);
    };

    return (
        <div onClick={openModal} className="card-panel todo__title modal-trigger" data-target="modal1">
            <span className="white-text">{todoTitle}</span>
        </div>
    );
});
