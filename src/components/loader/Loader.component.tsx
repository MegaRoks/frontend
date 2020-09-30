import React from 'react';

import './Loader.style.scss';

export const LoaderComponent: React.FC = () => {
    return (
        <div className="loader">
            <div className="preloader-wrapper big active">
                <div className="spinner-layer loader__item">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                        <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
