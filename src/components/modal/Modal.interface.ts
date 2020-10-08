import { ConnectedProps } from 'react-redux';

import { connector } from './Modal.service';

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface IModalProps extends ReduxPropsType {
    readonly children: React.ReactElement;
}
