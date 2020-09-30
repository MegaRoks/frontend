import React from 'react';

import './ActionButton.style.scss';
// import { Link } from 'react-router-dom';

export const ActionButtonComponent: React.FC = () => {
    return (
        <a className="btn-floating btn-large waves-effect waves-light action-button">
            <i className="material-icons">&#43;</i>
        </a>
    );
};
