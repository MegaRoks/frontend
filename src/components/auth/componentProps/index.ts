import { connect, ConnectedProps } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { RootStateType } from './../../../redux';
import { setError } from './../../../redux/actions/errorActions';
import { setLoader } from './../../../redux/actions/loaderActions';
import { login } from './../../../redux/actions/authActions';
import { setUser } from './../../../redux/actions/userActions';

const mapStateToProps = (state: RootStateType) => ({
    errorState: state.errorState,
    loaderState: state.loaderState,
    authState: state.authState,
    userState: state.userState,
});

const mapDispatchToProps = {
    setError,
    setLoader,
    login,
    setUser,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface IAuthProps extends PropsFromRedux, RouteComponentProps {}
