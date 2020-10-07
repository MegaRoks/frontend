import { ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { connector } from './Dashboard.service';

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface IDashboardProps extends ReduxPropsType, RouteComponentProps {}

