import React, { Fragment, useEffect, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose, AiOutlineEdit } from 'react-icons/ai';

import './Task.style.scss';
import { connector } from './Task.service';
import { ITaskProps } from './Task.interface';
import { AddButtonComponent } from './../addButton/AddButton.component';
import { Time } from './../../services/Time.service';
import { InputComponent } from '../UI/input/Input.component';

export const TaskComponent = connector((props: ITaskProps) => {
    useEffect(() => {
        props.addTasksListener();

        return () => {
            props.removeTasksListener();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [showInput, setShowInput] = useState<string>('');
    const [value, setValue] = useState('');

    const taskCreating = (title: React.ReactText) => {
        props.createTask(title);
    };

    const taskRemoving = (taskId: string) => {
        props.deleteTask(taskId);
    };

    const statusChanging = (taskId: string, status: boolean) => {
        props.changeStatus(taskId, !status);
    };

    const titleChanging = (taskId: string) => {
        setShowInput('0');
        setValue('');
        props.changeTitle(taskId, value);
    };

    const showEditInput = (taskId: string, title: string) => {
        setShowInput(taskId);
        setValue(title);
    };

    const closeEditInput = () => {
        setShowInput('0');
        setValue('');
    };

    const taskList = props.taskState.tasksList.filter((task) => task.todoId && task.todoId === props.selectTodo?.id);

    return (
        <div className="task">
            <h2>{props.selectTodo?.title}</h2>
            <div className="task__list">
                {taskList.length ? (
                    taskList.map((task) => (
                        <Fragment key={task.id}>
                            {showInput === task.id ? (
                                <div className="task__item task__container-edit">
                                    <label className="task__container task__body ">
                                        <InputComponent
                                            id="name"
                                            type="text"
                                            placeholder={'Enter Title'}
                                            value={value}
                                            onChange={(event) => setValue(event.target.value)}
                                        />
                                    </label>
                                    <div className="task__container task__buttons">
                                        <button
                                            id={`save-btn-${task.id}`}
                                            className="btn task__button task__button-save"
                                            onClick={titleChanging.bind(this, task.id, task.title)}
                                        >
                                            <AiOutlineCheck />
                                        </button>
                                        <button
                                            id={`cancel-btn-${task.id}`}
                                            className="btn task__button task__button-cancel"
                                            onClick={closeEditInput.bind(this, task.id)}
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="task__item">
                                    <label className="task__container task__body">
                                        <input
                                            type="checkbox"
                                            defaultChecked={task.status}
                                            className="task__checkbox"
                                            onClick={statusChanging.bind(this, task.id, task.status)}
                                        />
                                        <span>{task.title}</span>
                                        <small>{Time.getDateWithTime(task.createdAt)}</small>
                                    </label>
                                    <div className="task__container task__buttons">
                                        <button
                                            id={`edit-btn-${task.id}`}
                                            className="btn task__button task__button-edit"
                                            onClick={showEditInput.bind(this, task.id, task.title)}
                                        >
                                            <AiOutlineEdit />
                                        </button>
                                        <button
                                            id={`remove-btn-${task.id}`}
                                            className="btn task__button task__button-remove"
                                            onClick={taskRemoving.bind(this, task.id)}
                                        >
                                            <AiOutlineClose />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Fragment>
                    ))
                ) : (
                    <div className="task__item">No tasks</div>
                )}
            </div>
            <AddButtonComponent text={'Create Task'} placeholder={'Enter Title'} onCreate={taskCreating} />
        </div>
    );
});
