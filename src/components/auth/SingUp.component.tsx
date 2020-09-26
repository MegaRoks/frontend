import React from 'react';

import './Auth.style.scss';

export const SingUpComponent = () => {
    return (
        <form className="col s12 auth__sing-up_form">
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="First Name" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Last Name" id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">Last Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Password" id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Confirm Password" id="confirm_password" type="password" className="validate" />
                    <label htmlFor="confirm_password">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input placeholder="Email" id="email" type="email" className="validate" />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s6">
                    <input placeholder="Confirm Email" id="email" type="email" className="validate" />
                    <label htmlFor="confirm_email">Email</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <a className="waves-effect waves-light btn auth__button">Sing Up</a>
                </div>
            </div>
        </form>
    );
};
