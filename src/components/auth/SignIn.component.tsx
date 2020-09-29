import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Auth.style.scss';
import { useInput, useButton } from './Auth.service';
import { Http } from './../../services/Http.service';
import { Validators } from './../../services/Validators.service';
import { LoaderComponent } from './../loader/Loader.component';

export const SignInComponent: React.FC<RouteComponentProps> = ({ history }: RouteComponentProps) => {
    const [loader, setLoader] = useState(false);

    const inputEmail = useInput('', [Validators.required, Validators.email, Validators.maxLength(50)]);
    const inputPassword = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);

    const formRef = useButton(inputEmail.ref, inputPassword.ref);

    const signInHandler = (event: any) => {
        event.preventDefault();

        setLoader(true);

        inputEmail.onChange(inputEmail.value);
        inputPassword.onChange(inputPassword.value);

        const url = `http://localhost:3000/auth/sign-in`;
        const body = {
            email: inputEmail.value,
            password: inputPassword.value,
        };

        Http.post(url, body).subscribe(
            (res) => {
                console.log('res: ', res);
                history.push('/');
            },
            (error) => {
                console.log('error: ', error);
            },
            () => {
                setLoader(false);
            },
        );
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className="auth">
            {loader ? (
                <LoaderComponent />
            ) : (
                <form ref={formRef.fromRef} className="col s12 auth__sign-in_form" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                ref={inputEmail.ref}
                                placeholder="Email"
                                id="email"
                                type="email"
                                className="auth__input"
                                value={inputEmail.value}
                                onChange={inputEmail.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                ref={inputPassword.ref}
                                placeholder="Password"
                                id="password"
                                type="password"
                                className="auth__input"
                                value={inputPassword.value}
                                onChange={inputPassword.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <button className="btn auth__button" ref={formRef.buttonRef} onClick={signInHandler}>
                                Sign In
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};
