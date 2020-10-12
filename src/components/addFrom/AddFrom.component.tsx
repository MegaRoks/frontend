import React, { Fragment, useRef, useState } from 'react';

import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from './../UI/input/Input.component';

import './AddFrom.style.scss';

export const AddFormComponent: React.FC<any> = ({ text, placeholder, onCreate }) => {
    const [isShowInput, setIsShowInput] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const showForm = () => {
        setIsShowInput(true);
        inputRef.current?.focus();
    };

    const cancel = () => {
        setIsShowInput(false);
        setValue('');
    };

    const creating = () => {
        onCreate(value);
        setIsShowInput(false);
        setValue('');
    };

    return (
        <Fragment>
            {isShowInput ? (
                <div className="patel__input">
                    <InputComponent
                        id="name"
                        type="text"
                        inputRef={inputRef}
                        placeholder={placeholder}
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <div className="patel__button">
                        <ButtonComponent id={'create-btn'} type={'button'} onClick={cancel} text={'Cancel'} />
                        <ButtonComponent id={'create-btn'} type={'button'} onClick={creating} text={'Create'} />
                    </div>
                </div>
            ) : (
                <div className="patel__button">
                    <ButtonComponent id={'create-btn'} type={'button'} onClick={showForm} text={text} />
                </div>
            )}
        </Fragment>
    );
};
