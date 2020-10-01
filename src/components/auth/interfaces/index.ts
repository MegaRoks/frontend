import { RouteComponentProps } from 'react-router-dom';

import { ILoaderPayload } from './../../../redux/interfaces/loaderInterfaces';
import { IErrorPayload } from './../../../redux/interfaces/errorInterfaces';
import { IAuthPayload } from '../../../redux/interfaces/authInterfaces';

export interface IAuth extends RouteComponentProps {
    readonly error: IErrorPayload;
    setError(payload: IErrorPayload): void;
    readonly loader: ILoaderPayload;
    setLoader(payload: ILoaderPayload): void;
    readonly auth: IAuthPayload;
    setAuth(payload: IAuthPayload): void;
}
