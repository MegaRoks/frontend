import { RouteComponentProps } from 'react-router-dom';

import { ILoaderPayload } from './../../../redux/interfaces/loaderInterfaces';
import { IErrorPayload } from './../../../redux/interfaces/errorInterfaces';
import { IAuthPayload } from './../../../redux/interfaces/authInterfaces';
import { IUserPayload } from './../../../redux/interfaces/userInterfaces';

export interface IAuthProps extends RouteComponentProps {
    readonly loaderState: ILoaderPayload;
    setError(payload: IErrorPayload): void;
    setLoader(payload: ILoaderPayload): void;
    setAuth(payload: IAuthPayload): void;
    setUser(payload: IUserPayload): void;
}
