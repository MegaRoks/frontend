import { ConnectedProps } from 'react-redux';

import { connector } from './Todo.service';

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface ITodoProps extends ReduxPropsType {
    readonly todoId: string;
    readonly todoTitle: string;
}
