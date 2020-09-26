import React from 'react';


import './Header.style.scss';
import { InputComponent } from './../Input/Input.component';

export const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <a href="/" className="brand-logo">
                        ToDo Service
                    </a>

                    {/* <InputComponent idInput={'search'} /> */}

                    {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="/">Sing In</a>
                        </li>
                        <li>
                            <a href="/">Sing Up</a>
                        </li>
                    </ul> */}

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="header__search">
                            <InputComponent idInput={'search'} placeholder={'Search'} />
                        </li>
                        <li className="header__user-info">
                            User name
                            <a href="/">Log Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
