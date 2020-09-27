import React, { useEffect } from 'react';

import './Auth.style.scss';
import { useInput } from './Auth.service';

export const SignUpComponent = () => {
    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    const inputFirstName = useInput('');
    const inputLastName = useInput('');
    const inputEmail = useInput('');
    const inputPassword = useInput('');
    const inputConfirmPassword = useInput('');

    const signUpHandler = async (event: any) => {
        event.preventDefault();
        console.log(inputFirstName.value, inputLastName.value, inputEmail.value, inputPassword.value, inputConfirmPassword.value);
    };

    return (
        <div className="auth">
            <form className="col s12 auth__sign-up_form">
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            placeholder="First Name"
                            id="first_name"
                            type="text"
                            className="auth__input validate"
                            value={inputFirstName.value}
                            onChange={inputFirstName.onChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Last Name"
                            id="last_name"
                            type="text"
                            className="auth__input validate"
                            value={inputLastName.value}
                            onChange={inputLastName.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                        <input
                            placeholder="Password"
                            id="password"
                            type="password"
                            className="auth__input validate"
                            value={inputPassword.value}
                            onChange={inputPassword.onChange}
                        />
                    </div>
                    <div className="input-field col s6">
                        <input
                            placeholder="Confirm Password"
                            id="confirm_password"
                            type="password"
                            className="auth__input validate"
                            value={inputConfirmPassword.value}
                            onChange={inputConfirmPassword.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            placeholder="Email"
                            id="email"
                            type="email"
                            className="auth__input validate"
                            value={inputEmail.value}
                            onChange={inputEmail.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button className="btn auth__button" onClick={signUpHandler}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
