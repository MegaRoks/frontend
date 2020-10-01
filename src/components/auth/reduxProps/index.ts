import { IErrorPayload } from './../../../redux/interfaces/errorInterfaces';
import { ILoaderPayload } from './../../../redux/interfaces/loaderInterfaces';
import { IAuthPayload } from '../../../redux/interfaces/authInterfaces';
import { setError } from './../../../redux/actions/errorActions';
import { setLoader } from './../../../redux/actions/loaderActions';
import { setAuth } from './../../../redux/actions/authActions';

interface mapStateToPropsInterface {
    readonly error: IErrorPayload;
    readonly loader: ILoaderPayload;
    readonly auth: IAuthPayload;
}

export const mapStateToProps = (state: mapStateToPropsInterface) => ({
    error: state.error,
    loader: state.loader,
    auth: state.auth,
});

export const mapDispatchToProps = {
    setError,
    setLoader,
    setAuth,
};
