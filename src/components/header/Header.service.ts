import { connect } from 'react-redux';

import { RootStateType } from './../../redux';
import { setAuth } from './../../redux/actions/authActions';
import { RootDispatchType } from './../../redux';
import { Socket } from './../../services/Socket.service';
import { setLoader } from './../../redux/actions/loaderActions';

const mapStateToProps = (state: RootStateType) => ({
    authState: state.authState,
    userState: state.userState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    logout: () => dispatch(logout()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const logout = () => {
    return (dispatch: RootDispatchType) => {
        dispatch(setLoader({ isLoader: true }));

        localStorage.removeItem('token');
        dispatch(setAuth({ isAuth: false, token: null }));
        Socket.disconnect();

        dispatch(setLoader({ isLoader: false }));
    };
};
