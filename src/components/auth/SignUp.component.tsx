import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Auth.style.scss';
import { useButton, useInput } from './Auth.service';
import { Http } from './../../services/Http.service';
import { Validators } from './../../services/Validators.service';
import { LoaderComponent } from './../loader/Loader.component';

export const SignUpComponent: React.FC<RouteComponentProps> = ({ history }: RouteComponentProps) => {
    const inputFirstName = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const inputLastName = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const inputEmail = useInput('', [Validators.required, Validators.email, Validators.maxLength(50)]);
    const inputPassword = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const inputConfirmPassword = useInput('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.identical(inputPassword.value),
    ]);

    const formRef = useButton(inputFirstName.ref, inputLastName.ref, inputEmail.ref, inputPassword.ref, inputConfirmPassword.ref);

    const [loader, setLoader] = useState(false);

    const signUpHandler = (event: any) => {
        event.preventDefault();

        setLoader(true);

        const url = `http://localhost:3000/auth/sign-up`;
        const body = {
            firstName: inputFirstName.value,
            lastName: inputLastName.value,
            email: inputEmail.value,
            password: inputPassword.value,
            passwordConfirmation: inputConfirmPassword.value,
        };

        Http.post(url, body).subscribe(
            (res) => {
                console.log('res: ', res);
                history.push('/confirm');
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
                <form className="col s12 auth__sign-up_form" ref={formRef.fromRef} onSubmit={submitHandler}>
                    <div className="row">
                        <div className="input-field col s6">
                            <input
                                ref={inputFirstName.ref}
                                placeholder="First Name"
                                id="first_name"
                                type="text"
                                className="auth__input"
                                value={inputFirstName.value}
                                onChange={inputFirstName.onChange}
                            />
                        </div>
                        <div className="input-field col s6">
                            <input
                                ref={inputLastName.ref}
                                placeholder="Last Name"
                                id="last_name"
                                type="text"
                                className="auth__input"
                                value={inputLastName.value}
                                onChange={inputLastName.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
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
                        <div className="input-field col s6">
                            <input
                                ref={inputConfirmPassword.ref}
                                placeholder="Confirm Password"
                                id="confirm_password"
                                type="password"
                                className="auth__input"
                                value={inputConfirmPassword.value}
                                onChange={inputConfirmPassword.onChange}
                            />
                        </div>
                    </div>
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
                            <button className="btn auth__button" ref={formRef.buttonRef} onClick={signUpHandler}>
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
};
