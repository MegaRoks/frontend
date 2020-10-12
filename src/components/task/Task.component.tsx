import React, { useEffect } from 'react';

import './Task.style.scss';
import { connector } from './Task.service';
import { ITaskProps } from './Task.interface';
import { AddFormComponent } from './../addFrom/AddFrom.component';
import { Time } from './../../services/Time.service';
import { EditFormComponent } from './../editForm/EditForm.component';

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

    const taskSaving = (taskId: string, value: React.ReactText) => {
        props.changeTitle(taskId, value);
    };

    const taskRemoving = (taskId: string) => {
        props.deleteTask(taskId);
    };

    const statusChanging = (taskId: string, status: boolean) => {
        props.changeStatus(taskId, !status);
    };

    const taskList = props.taskState.tasksList.filter((task) => task.todoId && task.todoId === props.selectTodo?.id);

    return (
        <div className="task">
            <h2>{props.selectTodo?.title}</h2>
            <div className="task__list">
                {taskList.length ? (
                    taskList.map((task) => (
                        <div key={task.id} className="task__item">
                            <EditFormComponent id={task.id} title={task.title} onSave={taskSaving} onRemove={taskRemoving}>
                                <label className="task__container">
                                    <input
                                        type="checkbox"
                                        defaultChecked={task.status}
                                        className="task__checkbox"
                                        onClick={statusChanging.bind(this, task.id, task.status)}
                                    />
                                    <span className="task__title">{task.title}</span>
                                    <small>{Time.getDateWithTime(task.createdAt)}</small>
                                </label>
                            </EditFormComponent>
                        </div>
                    ))
                ) : (
                    <div className="task__item">No tasks</div>
                )}
            </div>
            <AddFormComponent text={'Create Task'} placeholder={'Enter Title'} onCreate={taskCreating} />
        </div>
    );
});
