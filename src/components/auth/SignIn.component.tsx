import React from 'react';

import './Auth.style.scss';
import { useInput, useButton } from './Auth.service';
import { connector, IAuthProps } from './componentProps';
import { Http } from './../../services/Http.service';
import { Jwt } from './../../services/Jwt.service';
import { Socket } from './../../services/Socket.service';
import { Validators } from './../../services/Validators.service';
import { LoaderComponent } from './../loader/Loader.component';
import { InputComponent } from './../UI/input/Input.component';
import { ButtonComponent } from './../UI/button/Button.component';
import { IUser } from './../../interfaces/userInterfaces';


export const SignInComponent: React.FC<IAuthProps> = connector(({ setError, loaderState, setLoader, history, login, setUser }: IAuthProps) => {
    const inputEmail = useInput('', [Validators.required, Validators.email(), Validators.maxLength(50)]);
    const inputPassword = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const formRef = useButton(inputEmail.ref, inputPassword.ref);

    const signInHandler = () => {
        setLoader({ isLoader: true });
        const url = `${process.env.REACT_APP_SERVER_URL}/auth/sign-in`;
        const body = {
            email: inputEmail.value,
            password: inputPassword.value,
        };

        Http.post(url, body).subscribe(
            ({ response }) => {
                const { user } = Jwt.decode<IUser>(response.token);
                setUser({ user });
                login({ token: response.token });
                setLoader({ isLoader: false });
                Socket.connect(response.token);
                history.push('/dashboard');
            },
            (error) => {
                M.toast({ html: error.message });
                setError({
                    isError: true,
                    errorMessage: error.message,
                });
                setLoader({ isLoader: false });
            },
        );
    };

    return (
        <div className="auth">
            {loaderState.isLoader ? (
                <LoaderComponent />
            ) : (
                <form ref={formRef.fromRef} className="col s12 auth__sign-in_form" onSubmit={signInHandler}>
                    <div className="row">
                        <div className="input-field col s12">
                            <InputComponent
                                id="email"
                                type="email"
                                inputRef={inputEmail.ref}
                                placeholder="Email"
                                value={inputEmail.value}
                                onChange={inputEmail.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <InputComponent
                                inputRef={inputPassword.ref}
                                placeholder="Password"
                                id="password"
                                type="password"
                                value={inputPassword.value}
                                onChange={inputPassword.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <ButtonComponent
                                id={'btn-sign-in'}
                                type={'submit'}
                                text={'Sign In'}
                                buttonRef={formRef.buttonRef}
                                onClick={signInHandler}
                            />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
});
