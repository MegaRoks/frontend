import { connect } from 'react-redux';

import { IUser } from './interfaces/userInterfaces';
import { Jwt } from './services/Jwt.service';
import { Socket } from './services/Socket.service';
import { RootDispatchType, RootStateType } from './redux';
import { setAuth } from './redux/actions/authActions';
import { setLoader } from './redux/actions/loaderActions';
import { setUser } from './redux/actions/userActions';

const mapStateToProps = (state: RootStateType) => ({
    authState: state.authState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    autoLogin: () => dispatch(autoLogin()),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

const autoLogin = () => {
    return (dispatch: RootDispatchType) => {
        dispatch(setLoader({ isLoader: true }));

        const token = localStorage.getItem('token');
        if (token) {
            Socket.connect(token);
            const { user } = Jwt.decode<IUser>(token);
            dispatch(setUser({ user }));
            dispatch(setAuth({ isAuth: true, token }));
        }

        dispatch(setLoader({ isLoader: false }));
    };
};
