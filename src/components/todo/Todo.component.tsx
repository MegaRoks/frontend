import React from 'react';

import './Todo.style.scss';

export const TodoComponent: React.FC<any> = ({ todoId, todoTitle }: any) => {
    return (
        <div className="card-panel todo__title">
            <span className="white-text">{todoTitle}</span>
        </div>
    );
};
