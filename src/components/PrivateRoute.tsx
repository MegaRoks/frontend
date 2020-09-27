import React from 'react';
import { RouteProps } from 'react-router';
import { Route } from 'react-router-dom';

export const PrivateRoute = ({ children, ...args }: RouteProps) => {
    return <Route {...args} render={() => children} />;
};
