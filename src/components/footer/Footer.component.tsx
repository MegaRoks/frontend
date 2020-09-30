import React from 'react';

import './Footer.style.scss';

export const FooterComponent: React.FC = () => {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Copyright Text
                    <a className="grey-text text-lighten-4 right" href="/">
                        More Links
                    </a>
                </div>
            </div>
        </footer>
    );
};
