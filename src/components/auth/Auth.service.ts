import { connect } from 'react-redux';

import { IUserData } from './Auth.interface';
import { Http } from './../../services/Http.service';
import { Jwt } from './../../services/Jwt.service';
import { Socket } from './../../services/Socket.service';
import { RootDispatchType, RootStateType } from './../../redux';
import { setError } from './../../redux/actions/errorActions';
import { setLoader } from './../../redux/actions/loaderActions';
import { login } from './../../redux/actions/authActions';
import { setUser } from './../../redux/actions/userActions';
import { IUser } from './../../interfaces/userInterfaces';

const mapStateToProps = (state: RootStateType) => ({
    errorState: state.errorState,
    loaderState: state.loaderState,
});

const mapDispatchToProps = (dispatch: RootDispatchType) => ({
    singIn: (userData: IUserData, history: any) => dispatch(singIn(userData, history)),
    signUp: (userData: IUserData, history: any) => dispatch(signUp(userData, history)),
});

export const connector = connect(mapStateToProps, mapDispatchToProps);

export const singIn = (userData: IUserData, history: any) => {
    return (dispatch: RootDispatchType) => {
        dispatch(setLoader({ isLoader: true }));
        const url = `${process.env.REACT_APP_SERVER_URL}/auth/sign-in`;
        Http.post(url, userData).subscribe(
            ({ response }) => {
                console.log('signUp res: ', response);

                const { user } = Jwt.decode<IUser>(response.token);
                dispatch(setUser({ user }));
                dispatch(login({ token: response.token }));
                dispatch(setLoader({ isLoader: false }));
                Socket.connect(response.token);
                history.push('/dashboard');
            },
            (error) => {
                M.toast({ html: error.message });
                const payload = {
                    isError: true,
                    errorMessage: error.message,
                };
                dispatch(setError(payload));
                dispatch(setLoader({ isLoader: false }));
            },
        );
    };
};

export const signUp = (userData: IUserData, history: any) => {
    return (dispatch: RootDispatchType) => {
        dispatch(setLoader({ isLoader: true }));
        const url = `${process.env.SERVER_URL}/auth/sign-up`;
        Http.post(url, userData).subscribe(
            ({ response }) => {
                console.log('signUp res: ', response);

                dispatch(setLoader({ isLoader: false }));
                history.push('/confirm');
            },
            (error) => {
                M.toast({ html: error.message });
                const payload = {
                    isError: true,
                    errorMessage: error.message,
                };
                dispatch(setError(payload));
                dispatch(setLoader({ isLoader: false }));
            },
        );
    };
};
