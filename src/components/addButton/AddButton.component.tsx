import React, { Fragment, useRef, useState } from 'react';

import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from './../UI/input/Input.component';

import './AddButton.style.scss';

export const AddButtonComponent: React.FC<any> = ({ onCreate }) => {
    const [isShowInput, setIsShowInput] = useState(false);
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const showFormCategoryCreating = () => {
        setIsShowInput(true);
        inputRef.current?.focus();
    };

    const cancelCategoryCreating = () => {
        setIsShowInput(false);
        setValue('');
    };

    const categoryCreating = () => {
        setIsShowInput(false);
        setValue('');
        onCreate(value);
    };

    return (
        <Fragment>
            {isShowInput ? (
                <div className="category__input">
                    <InputComponent
                        id="category_name"
                        type="text"
                        inputRef={inputRef}
                        placeholder="Enter Title"
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <div className="category__button">
                        <ButtonComponent id={'create-btn'} type={'button'} onClick={cancelCategoryCreating} text={'Cancel'} />
                        <ButtonComponent id={'create-btn'} type={'button'} onClick={categoryCreating} text={'Create'} />
                    </div>
                </div>
            ) : (
                <div className="category__button">
                    <ButtonComponent id={'create-btn'} type={'button'} onClick={showFormCategoryCreating} text={'Create Category'} />
                </div>
            )}
        </Fragment>
    );
};
