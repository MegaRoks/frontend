import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.style.scss';
// import { InputComponent } from './../Input/Input.component';

export const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <Link to={'/'} className="brand-logo">
                        ToDo Service
                    </Link>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <NavLink to={'/auth/sign-in'} exact>
                                Sign In
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/auth/sign-up'} exact>
                                Sign Up
                            </NavLink>
                        </li>
                    </ul>

                    {/* <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li className="header__search">
                            <InputComponent idInput={'search'} placeholder={'Search'} />
                        </li>
                        <li className="header__user-info">
                            User name
                            <a href="/">Log Out</a>
                        </li>
                    </ul> */}
                </div>
            </nav>
        </header>
    );
};
