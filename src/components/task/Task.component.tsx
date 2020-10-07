import React, { Fragment, useState } from 'react';
// import Modal from 'react-modal';

// import './Task.style.scss';
// import { connector } from './Task.service';
// import { ITodoProps } from './Task.interface';
// import { AddButtonComponent } from './../addButton/AddButton.component';
// import { ModalComponent } from '../modal/Modal.component';

// const customStyles = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         width: '600px',
//         height: '600px',
//         // overflow: 'hidden',
//     },
// };

// Modal.setAppElement('#root');

// export const TaskComponent = connector((props: ITodoProps) => {
    
//     const taskCreating = (title: React.ReactText) => {
//         props.createTask(title, props.todoId);
//     };

//     const [isOpenModal, setIsOpenModal] = useState(false);

//     const openModal = () => {
//         console.log(1);

//         props.addTasksListener(props.todoId);
//         setIsOpenModal(true);
//     };

//     const closeModal = () => {
//         console.log(2);

//         props.removeTasksListener();
//         setIsOpenModal(false);
//     };

//     return (
//         <Fragment>
//             <div onClick={openModal} className="card-panel todo__title">
//                 <span className="white-text">{props.todoTitle}</span>
//             </div>

//             <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
//                 Modal
//             </a>

//             <ModalComponent />

//             {/* <Modal isOpen={isOpenModal} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
//                 <div className="task">
//                     <h2>{props.todoTitle}</h2>

//                     <div className="task__list">
//                         {props.taskState.tasksList
//                             .filter((task) => task.todoId && task.todoId === props.todoId)
//                             .map((task) => (
//                                 <div key={task.id} className="task__item">
//                                     <label>
//                                         <input type="checkbox" className="task__checkbox" />
//                                         <span>{task.title}</span>
//                                     </label>

//                                     <div className="task__container">
//                                         <small className="task__date">{task.createdAt}</small>
//                                         <button className="btn task__button task__button-remove">&times;</button>
//                                     </div>
//                                 </div>
//                             ))}
//                     </div>
//                     <AddButtonComponent text={'Create Task'} placeholder={'Enter Title'} onCreate={taskCreating} />
//                 </div>
//             </Modal> */}
//         </Fragment>
//     );
// });
