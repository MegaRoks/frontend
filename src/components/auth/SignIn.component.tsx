import React from 'react';

import './Auth.style.scss';
import { IAuthProps } from './Auth.interface';
import { connector } from './Auth.service';
import { Validators, useInput, useButton } from './../../services/Validators.service';
import { LoaderComponent } from './../loader/Loader.component';
import { InputComponent } from './../UI/input/Input.component';
import { ButtonComponent } from './../UI/button/Button.component';

export const SignInComponent: React.FC<IAuthProps> = connector(({ loaderState, history, singIn }: IAuthProps) => {
    const inputEmail = useInput('', [Validators.required, Validators.email(), Validators.maxLength(50)]);
    const inputPassword = useInput('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    const formRef = useButton(inputEmail.ref, inputPassword.ref);

    const signInHandler = () => {
        const body = {
            email: inputEmail.value,
            password: inputPassword.value,
        };
        singIn(body, history);
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
