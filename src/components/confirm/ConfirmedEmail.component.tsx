import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Confirm.style.scss';

export const ConfirmedEmailComponent: React.FC<RouteComponentProps> = ({ match }: RouteComponentProps) => {
    const token = match.params;

    console.log(token);

    return (
        <div className="row">
            <h1>Successful Confirm Email.</h1>
        </div>
    );
};
