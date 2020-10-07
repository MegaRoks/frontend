import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.style.scss';
import { IHeaderProps } from './Header.interface';
import { connector } from './Header.service';

export const HeaderComponent = connector(({ authState, logout, userState }: IHeaderProps) => {
    const logoutHandler = () => {
        logout();
    };

    return (
        <header>
            <nav>
                <div className="container">
                    <Link to={'/'} className="brand-logo">
                        ToDo Service
                    </Link>

                    {authState.isAuth ? (
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className="header__user-info">
                                <NavLink to="/dashboard">
                                    {userState.user?.firstName} {userState.user?.lastName}
                                </NavLink>
                            </li>
                            <li className="header__user-info">
                                <NavLink to="/auth/sign-in" onClick={logoutHandler}>
                                    Log Out
                                </NavLink>
                            </li>
                        </ul>
                    ) : (
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
                    )}
                </div>
            </nav>
        </header>
    );
});
