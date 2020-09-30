import React from 'react';

import './Input.style.scss';
import { InputInterface } from './interfaces';

export const InputComponent: React.FC<InputInterface> = ({ id, type, inputRef, placeholder, value, onChange }: InputInterface) => {
    return <input id={id} type={type} ref={inputRef} placeholder={placeholder} className="input" value={value} onChange={onChange} />;
};
