import React from 'react';
import { connect } from 'react-redux';

import './Auth.style.scss';
import { IAuth } from './interfaces';
import { useInput, useButton } from './Auth.service';
import { mapDispatchToProps, mapStateToProps } from './reduxProps';
import { Http } from './../../services/Http.service';
import { Validators } from './../../services/Validators.service';
import { LoaderComponent } from './../loader/Loader.component';
import { InputComponent } from './../UI/input/Input.component';
import { ButtonComponent } from './../UI/button/Button.component';

export const SignInComponent = connect(
    mapStateToProps,
    mapDispatchToProps,
)(({ error, setError, loader, setLoader, history }: IAuth) => {
    const inputEmail = useInput('', [Validators.required, Validators.email(), Validators.maxLength(50)]);
    const inputPassword = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);

    const formRef = useButton(inputEmail.ref, inputPassword.ref);

    const signInHandler = (event: any) => {
        event.preventDefault();

        setLoader({ isLoader: true });

        const url = `${process.env.SERVER_URL}/auth/sign-in`;
        const body = {
            email: inputEmail.value,
            password: inputPassword.value,
        };

        Http.post(url, body).subscribe(
            (res) => {
                console.log('res: ', res);
                setLoader({ isLoader: false });
                history.push('/');
            },
            (error) => {
                console.log('error: ', error);
                M.toast({ html: error.message });

                setError({
                    isError: true,
                    errorMessage: error.message,
                });
                setLoader({ isLoader: false });
            },
        );
    };

    const submitHandler = (event: any) => {
        event.preventDefault();
    };

    return (
        <div className="auth">
            {loader.isLoader ? (
                <LoaderComponent />
            ) : (
                <form ref={formRef.fromRef} className="col s12 auth__sign-in_form" onSubmit={submitHandler}>
                    <div className="row">
                        <div className="input-field col s12">
                            <InputComponent
                                id="email"
                                type="email"
                                ref={inputEmail.ref}
                                placeholder="Email"
                                value={inputEmail.value}
                                onChange={inputEmail.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <InputComponent
                                ref={inputPassword.ref}
                                placeholder="Password"
                                id="password"
                                type="password"
                                value={inputPassword.value}
                                onChange={inputPassword.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <ButtonComponent id={'btn-sign-in'} type={'submit'} text={'Sign In'} ref={formRef.buttonRef} onClick={signInHandler} />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
});
