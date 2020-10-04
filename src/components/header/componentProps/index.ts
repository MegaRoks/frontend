import { connect, ConnectedProps } from 'react-redux';

import { IActionCreator } from './../../../redux/interfaces';
import { RootStateType } from './../../../redux';
import { logout } from './../../../redux/actions/authActions';
import { setUser } from './../../../redux/actions/userActions';
import { IAuthPayload } from './../../../redux/interfaces/authInterfaces';
import { IUserPayload } from './../../../redux/interfaces/userInterfaces';

interface MapDispatchToProps {
    logout: (payload: IAuthPayload) => IActionCreator<IAuthPayload>;
    setUser: (payload: IUserPayload) => IActionCreator<IUserPayload>;
}

const mapStateToProps = (state: RootStateType) => ({
    authState: state.authState,
    userState: state.userState,
});

const mapDispatchToProps: MapDispatchToProps = {
    logout,
    setUser,
};

export const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface IHeaderProps extends PropsFromRedux {}
