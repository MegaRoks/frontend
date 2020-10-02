import { IErrorPayload } from './../../../redux/interfaces/errorInterfaces';
import { ILoaderPayload } from './../../../redux/interfaces/loaderInterfaces';
import { IAuthPayload } from './../../../redux/interfaces/authInterfaces';
import { IUserPayload } from './../../../redux/interfaces/userInterfaces';
import { setError } from './../../../redux/actions/errorActions';
import { setLoader } from './../../../redux/actions/loaderActions';
import { setAuth } from './../../../redux/actions/authActions';
import { setUser } from './../../../redux/actions/userActions';

interface mapStateToPropsInterface {
    readonly errorState: IErrorPayload;
    readonly loaderState: ILoaderPayload;
    readonly authState: IAuthPayload;
    readonly userState: IUserPayload;
}

export const mapStateToProps = (state: mapStateToPropsInterface) => ({
    errorState: state.errorState,
    loaderState: state.loaderState,
    authState: state.authState,
    userState: state.userState,
});

export const mapDispatchToProps = {
    setError,
    setLoader,
    setAuth,
    setUser,
};
