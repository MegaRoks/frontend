import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.style.scss';

export const HomeComponent: React.FC<RouteComponentProps> = ({ history }: RouteComponentProps) => {
    return <h1>Home Page</h1>;
};
