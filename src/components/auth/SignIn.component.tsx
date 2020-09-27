import React, { useEffect } from 'react';

import './Auth.style.scss';
import { useInput } from './Auth.service';
import { Http } from './../../services/Http.service';

export const SignInComponent = () => {
    useEffect(() => {
        window.M.updateTextFields();
    }, []);

    const inputEmail = useInput('');
    const inputPassword = useInput('');

    const signInHandler = async (event: any) => {
        event.preventDefault();
        console.log(inputEmail.value, inputPassword.value);
        const url = `http://localhost:3000/auth/sign-in`;
        const body = {
            email: inputEmail.value,
            password: inputPassword.value,
        };
        await Http.post(url, body)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className="auth">
            <form className="col s12 auth__sign-in_form">
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
                        <input
                            placeholder="Password"
                            id="password"
                            type="password"
                            className="auth__input validate"
                            value={inputPassword.value}
                            onChange={inputPassword.onChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <button className="btn auth__button" onClick={signInHandler}>
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
