import React, { Fragment, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';

import { InputComponent } from './../UI/input/Input.component';
import { IEditFormProps } from './EditForm.interface';

import './EditForm.style.scss';

export const EditFormComponent: React.FC<IEditFormProps> = (props: IEditFormProps) => {
    const [showInput, setShowInput] = useState<string>('');
    const [value, setValue] = useState('');

    const titleChanging = (id: string) => {
        setShowInput('0');
        setValue('');
        props.onSave(id, value);
    };

    const showEditInput = (id: string, title: string) => {
        setShowInput(id);
        setValue(title);
    };

    const closeEditInput = () => {
        setShowInput('0');
        setValue('');
    };

    return (
        <Fragment>
            {showInput === props.id ? (
                <Fragment>
                    <label className="editForm__container ">
                        <InputComponent
                            id="name"
                            type="text"
                            placeholder={'Enter Title'}
                            value={value}
                            onChange={(event) => setValue(event.target.value)}
                        />
                    </label>
                    <div className="editForm__container editForm__buttons">
                        <button
                            id={`save-btn-${props.id}`}
                            className="btn editForm__button"
                            onClick={titleChanging.bind(this, props.id, props.title)}
                        >
                            <AiOutlineCheck />
                        </button>
                        <button
                            id={`cancel-btn-${props.id}`}
                            className="btn editForm__button"
                            onClick={closeEditInput.bind(this, props.id)}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <label className="editForm__container">{props.children}</label>
                    <div className="editForm__container editForm__buttons">
                        <button
                            id={`edit-btn-${props.id}`}
                            className="btn editForm__button"
                            onClick={showEditInput.bind(this, props.id, props.title)}
                        >
                            <AiOutlineEdit />
                        </button>
                        <button
                            id={`remove-btn-${props.id}`}
                            className="btn editForm__button"
                            onClick={() => props.onRemove(props.id)}
                        >
                            <AiOutlineClose />
                        </button>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};
