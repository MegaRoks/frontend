import React from 'react';

import './Auth.style.scss';

export const SingInComponent = () => {
    return (
        <form className="col s12 auth__sing-in_form">
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="First Name" id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">First Name</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s12">
                    <input placeholder="Password" id="password" type="password" className="validate" />
                    <label htmlFor="password">Password</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <a className="waves-effect waves-light btn auth__button">Sing In</a>
                </div>
            </div>
        </form>
    );
};
