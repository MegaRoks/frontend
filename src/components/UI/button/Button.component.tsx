import React from 'react';

import './Button.style.scss';
import { ButtonInterface } from './interfaces';

export const ButtonComponent: React.FC<ButtonInterface> = ({ id, type, text, buttonRef, onClick }: ButtonInterface) => {

    const buttonClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        onClick(event);
    }

    return (
        <button className="btn button" id={id} type={type} ref={buttonRef} onClick={buttonClick}>
            {text}
        </button>
    );
};
