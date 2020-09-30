import { IErrorPayload } from './../../../redux/interfaces/errorInterfaces';
import { ILoaderPayload } from './../../../redux/interfaces/loaderInterfaces';
import { setError } from './../../../redux/actions/errorActions';
import { setLoader } from './../../../redux/actions/loaderActions';

interface mapStateToPropsInterface {
    readonly error: IErrorPayload;
    readonly loader: ILoaderPayload;
}

export const mapStateToProps = (state: mapStateToPropsInterface) => ({
    error: state.error,
    loader: state.loader,
});

export const mapDispatchToProps = {
    setError,
    setLoader,
};
