import React, { Fragment, useState } from 'react';
import Modal from 'react-modal';

import './Todo.style.scss';
import { connector } from './Todo.service';
import { ITodoProps } from './Todo.interface';
import { AddButtonComponent } from './../addButton/AddButton.component';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
    },
};

Modal.setAppElement('#root');

export const TodoComponent = connector((props: ITodoProps) => {
    const taskCreating = (title: React.ReactText) => {
        props.createTask(title, props.todoId);
    };

    const [isOpenModal, setIsOpenModal] = useState(false);

    const openModal = () => {
        console.log(1);

        props.addTasksListener(props.todoId);
        setIsOpenModal(true);
    };

    const closeModal = () => {
        console.log(2);

        props.removeTasksListener();
        setIsOpenModal(false);
    };

    return (
        <Fragment>
            <div onClick={openModal} className="card-panel todo__title">
                <span className="white-text">{props.todoTitle}</span>
            </div>

            <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <h2>{props.todoTitle}</h2>
                <button onClick={closeModal}>close</button>

                {props.taskState.tasksList
                    .filter((task) => task.todoId && task.todoId === props.todoId)
                    .map((task) => (
                        <div key={task.id}>{task.title}</div>
                    ))}

                <AddButtonComponent text={'Create Todo'} placeholder={'Enter Title'} onCreate={taskCreating} />
            </Modal>
        </Fragment>
    );
});
