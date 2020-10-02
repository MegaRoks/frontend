import { RouteComponentProps } from 'react-router-dom';

import { IAuthPayload } from './../../../redux/interfaces/authInterfaces';
import { IUserPayload } from './../../../redux/interfaces/userInterfaces';

export interface IHeaderProps extends RouteComponentProps {
    readonly authState: IAuthPayload;
    readonly userState: IUserPayload;
}
