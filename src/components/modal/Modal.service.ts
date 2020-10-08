import { connect } from 'react-redux';

import { RootDispatchType, RootStateType } from './../../redux';
import { setLoader } from './../../redux/actions/loaderActions';

const mapStateToProps = (state: RootStateType) => ({
    isLoader: state.loaderState.isLoader,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    showLoader: () => dispatch(showLoader()),
    hiddenLoader: () => dispatch(hiddenLoader()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const showLoader = () => {
    return (dispatch: RootDispatchType) => {
        dispatch(setLoader({ isLoader: true }));
    };
};

const hiddenLoader = () => {
    return (dispatch: RootDispatchType) => {
        dispatch(setLoader({ isLoader: false }));
    };
};
