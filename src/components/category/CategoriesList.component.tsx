import React, { Fragment, useRef, useState } from 'react';

import './Category.style.scss';
import { CategoryComponent } from './Category.component';
import { ActionButtonComponent } from './../actionButton/ActionButton.component';
import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from '../UI/input/Input.component';

export const CategoriesListComponent: React.FC = () => {
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

    const categoryCreating = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setIsShowInput(false);
        setValue('');
    };

    return (
        <Fragment>
            <div className="row category category__list">
                <CategoryComponent />
                <CategoryComponent />
                {/* <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent />
                <CategoryComponent /> */}

                <div className="col s12 m3 category__item">
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
                </div>
            </div>
            <ActionButtonComponent />
        </Fragment>
    );
};
