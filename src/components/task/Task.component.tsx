import React, { useEffect } from 'react';

import './Task.style.scss';
import { connector } from './Task.service';
import { ITaskProps } from './Task.interface';
import { AddButtonComponent } from './../addButton/AddButton.component';

export const TaskComponent = connector((props: ITaskProps) => {
    useEffect(() => {
        props.addTasksListener();

        return () => {
            props.removeTasksListener();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const taskCreating = (title: React.ReactText) => {
        props.createTask(title);
    };

    return (
        <div className="task">
            <h2>{props.selectTodo?.title}</h2>

            <div className="task__list">
                {props.taskState.tasksList
                    .filter((task) => task.todoId && task.todoId === props.selectTodo?.id)
                    .map((task) => (
                        <div key={task.id} className="task__item">
                            <label>
                                <input type="checkbox" className="task__checkbox" />
                                <span>{task.title}</span>
                            </label>

                            <div className="task__container">
                                <small className="task__date">{task.createdAt}</small>
                                <button className="btn task__button task__button-remove">&times;</button>
                            </div>
                        </div>
                    ))}
            </div>

            <AddButtonComponent text={'Create Task'} placeholder={'Enter Title'} onCreate={taskCreating} />
        </div>
    );
});
