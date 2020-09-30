import React from 'react';

import './Input.style.scss';
import { InputInterface } from './Input.interface';

export const InputComponent: React.FC<InputInterface> = ({ idInput, label, placeholder }: InputInterface) => {
    return (
        <div className="input">
            <input placeholder={placeholder} id={idInput} type="text" className="input__value validate" />

            {label && (
                <label className="active" htmlFor={idInput}>
                    {label}
                </label>
            )}
        </div>
    );
};