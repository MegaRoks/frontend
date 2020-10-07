import { ConnectedProps } from 'react-redux';
import { connector } from './Category.service';

type ReduxPropsType = ConnectedProps<typeof connector>;

export interface ICategoryProps extends ReduxPropsType {
    readonly categoryId: string;
    readonly categoryTitle: string;
}
