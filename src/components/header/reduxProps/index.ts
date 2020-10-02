import { IAuthPayload } from './../../../redux/interfaces/authInterfaces';
import { IUserPayload } from './../../../redux/interfaces/userInterfaces';
import { setAuth } from './../../../redux/actions/authActions';
import { setUser } from './../../../redux/actions/userActions';

interface mapStateToPropsInterface {
    readonly authState: IAuthPayload;
    readonly userState: IUserPayload;
}

export const mapStateToProps = (state: mapStateToPropsInterface) => ({
    authState: state.authState,
    userState: state.userState,
});

export const mapDispatchToProps = {
    setAuth,
    setUser,
};
