import { connect, ConnectedProps } from 'react-redux';

import { RootStateType } from './../../../redux';
import { setCategoriesList, addCategory, updateCategory, removeCategory } from './../../../redux/actions/categoryActions';

const mapStateToProps = (state: RootStateType) => ({
    categoryState: state.categoryState,
    authState: state.authState,
});

const mapDispatchToProps = {
    addCategory,
    updateCategory,
    removeCategory,
    setCategoriesList,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface ICategoryProps extends PropsFromRedux {}
