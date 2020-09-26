import React, { useState } from 'react';

import './Auth.style.scss';
import { SingInComponent } from './SingIn.component';
import { SingUpComponent } from './SingUp.component';

export const AuthComponent = () => {
    const [toggle, setToggle] = useState(true);

    return (
        <div className="auth">
            {toggle ? <SingUpComponent /> : <SingInComponent />}

            <div className="card-tabs tabs">
                <ul className="tabs tabs-fixed-width">
                    <li className="tab tabs__item">
                        <a onClick={setToggle.bind(this, false)} className="tab tabs__title" href="#test1">
                            Sing In
                        </a>
                    </li>
                    <li className="tab tabs__item">
                        <a onClick={setToggle.bind(this, true)} className="tab tabs__title" href="#test2">
                            Sing Up
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
