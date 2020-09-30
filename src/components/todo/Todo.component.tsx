import React from 'react';

import './Todo.style.scss';

export const TodoComponent: React.FC = () => {
    return (
        <div className="card-panel todo__title">
            <span className="white-text">Todo Title</span>
        </div>
    );
};
