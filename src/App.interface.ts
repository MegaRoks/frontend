import { ConnectedProps } from 'react-redux';

import { connector } from './App.service';

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface IAppProps extends ReduxPropsType {}
