import React from 'react';

import './Header.style.scss';

export const HeaderComponent = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <a href="/" className="brand-logo">
                        ToDo Service
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="/">Sing In</a>
                        </li>
                        <li>
                            <a href="/">Sing Up</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
