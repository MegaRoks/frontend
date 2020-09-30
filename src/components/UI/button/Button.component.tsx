import React from 'react';

import './Button.style.scss';
import { ButtonInterface } from './interfaces';

export const ButtonComponent: React.FC<ButtonInterface> = ({ id, type, text, ref, onClick }: ButtonInterface) => {
    return (
        <button className="btn auth__button" id={id} type={type} ref={ref} onClick={onClick}>
            {text}
        </button>
    );
};
