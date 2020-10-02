import React from 'react';
import { connect } from 'react-redux';

import './Auth.style.scss';
import { useButton, useInput } from './Auth.service';
import { IAuthProps } from './interfaces';
import { mapDispatchToProps, mapStateToProps } from './reduxProps';
import { Http } from './../../services/Http.service';
import { Validators } from './../../services/Validators.service';
import { LoaderComponent } from './../loader/Loader.component';
import { InputComponent } from './../UI/input/Input.component';
import { ButtonComponent } from './../UI/button/Button.component';

export const SignUpComponent: React.FC<IAuthProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
)(({ setError, loaderState, setLoader, history }: IAuthProps) => {
    const inputFirstName = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const inputLastName = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const inputEmail = useInput('', [Validators.required, Validators.email(), Validators.maxLength(50)]);
    const inputPassword = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const inputConfirmPassword = useInput('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        Validators.identical(inputPassword.value),
    ]);

    const formRef = useButton(inputFirstName.ref, inputLastName.ref, inputEmail.ref, inputPassword.ref, inputConfirmPassword.ref);

    const signUpHandler = (event: any) => {
        event.preventDefault();
        setLoader({ isLoader: true });
        const url = `${process.env.SERVER_URL}/auth/sign-up`;
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
                setLoader({ isLoader: false });
                history.push('/confirm');
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
                <form className="col s12 auth__sign-up_form" ref={formRef.fromRef} onSubmit={signUpHandler}>
                    <div className="row">
                        <div className="input-field col s6">
                            <InputComponent
                                id="first_name"
                                type="text"
                                inputRef={inputFirstName.ref}
                                placeholder="First Name"
                                value={inputFirstName.value}
                                onChange={inputFirstName.onChange}
                            />
                        </div>
                        <div className="input-field col s6">
                            <InputComponent
                                id="last_name"
                                type="text"
                                inputRef={inputLastName.ref}
                                placeholder="Last Name"
                                value={inputLastName.value}
                                onChange={inputLastName.onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <InputComponent
                                id="password"
                                type="password"
                                inputRef={inputPassword.ref}
                                placeholder="Password"
                                value={inputPassword.value}
                                onChange={inputPassword.onChange}
                            />
                        </div>
                        <div className="input-field col s6">
                            <InputComponent
                                id="confirm_password"
                                type="password"
                                inputRef={inputConfirmPassword.ref}
                                placeholder="Confirm Password"
                                value={inputConfirmPassword.value}
                                onChange={inputConfirmPassword.onChange}
                            />
                        </div>
                    </div>
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
                            <ButtonComponent
                                id={'btn-sign-up'}
                                type={'submit'}
                                text={'Sign Up'}
                                buttonRef={formRef.buttonRef}
                                onClick={signUpHandler}
                            />
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
});
