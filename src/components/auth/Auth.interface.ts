import { ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { connector } from './Auth.service';

export interface IUserData {
    readonly email: React.ReactText;
    readonly password: React.ReactText;
    readonly firstName?: React.ReactText;
    readonly lastName?: React.ReactText;
    readonly passwordConfirmation?: React.ReactText;
}

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface IAuthProps extends ReduxPropsType, RouteComponentProps {}
