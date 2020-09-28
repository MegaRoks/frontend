import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './ConfirmPage.style.scss';

export const ConfirmPageComponent: React.FC<RouteComponentProps> = ({ match }: RouteComponentProps) => {
    const token = match.params;

    console.log(token);

    return (
        <div className="row">
            <h1>Hello</h1>
        </div>
    );
};
