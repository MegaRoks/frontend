import { ConnectedProps } from 'react-redux';

import { connector } from './Task.service';

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface ITaskProps extends ReduxPropsType {}
