import React, { Fragment, useEffect, useRef, useState } from 'react';

import './Category.style.scss';
import { CategoryComponent } from './Category.component';
import { connector, ICategoryProps } from './componentProps';
import { ActionButtonComponent } from './../actionButton/ActionButton.component';
import { ButtonComponent } from './../UI/button/Button.component';
import { InputComponent } from './../UI/input/Input.component';
import { Socket } from './../../services/Socket.service';
import { ICategory } from './../../interfaces/categoryInterfaces';

export const CategoriesListComponent: React.FC = connector(({ categoryState, setCategoriesList, addCategory }: ICategoryProps) => {
    useEffect(() => {
        Socket.emit('getCategoriesList');
        const categoriesList$ = Socket.on<{ total: number; categories: ICategory[] }>('gotCategoriesList');
        categoriesList$.subscribe(
            ({ categories }) => {
                console.log('CategoriesList', categories);
                setCategoriesList({ categories });
            },
            (err) => {
                console.error('err', err);
            },
        );

        return () => {
            Socket.removeEventListener('gotCategoriesList');
        };
    }, [setCategoriesList]);

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
        Socket.emit('createCategory', { title: value });
        const category$ = Socket.on<ICategory>('createdCategory');
        category$.subscribe(
            (res) => {
                console.log('New Category', res);
                addCategory({ category: res });
            },
            (err) => {
                console.error('err', err);
            },
        );
    };

    return (
        <Fragment>
            <div className="row category category__list">
                {categoryState.categoriesList.map((category) => (
                    <CategoryComponent key={category.id} />
                ))}

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
});
