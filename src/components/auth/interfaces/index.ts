import { RouteComponentProps } from 'react-router-dom';

import { ILoaderPayload } from './../../../redux/interfaces/loaderInterfaces';
import { IErrorPayload } from './../../../redux/interfaces/errorInterfaces';

export interface IAuth extends RouteComponentProps {
    readonly error: IErrorPayload;
    setError(payload: IErrorPayload): void;
    readonly loader: ILoaderPayload;
    setLoader(payload: ILoaderPayload): void;
}
