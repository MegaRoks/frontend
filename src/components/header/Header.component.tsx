import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.style.scss';
import { InputComponent } from './../UI/input/Input.component';
import { IHeaderProps } from './interfaces';
import { mapDispatchToProps, mapStateToProps } from './reduxProps';

export const HeaderComponent: React.FC<IHeaderProps> = connect(
    mapStateToProps,
    mapDispatchToProps,
)(({ authState, userState }: IHeaderProps) => {
    return (
        <header>
            <nav>
                <div className="container">
                    <Link to={'/'} className="brand-logo">
                        ToDo Service
                    </Link>

                    {authState.isAuth ? (
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li className="header__search">
                                <InputComponent id={'search'} type={'text'} placeholder={'Search'} />
                            </li>
                            <li className="header__user-info">
                                {(userState.user?.firstName, userState.user?.lastName)}
                                <a href="/">Log Out</a>
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
