import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Task.css'

const Task = ({ task, lineThrough }) => {
    const { name, description } = task;
    console.log(lineThrough)
    return (
        <div className='task-body'>
            <h5 className={lineThrough ? 'linethrough' : ''}>{name}</h5>
            <p className={lineThrough ? 'linethrough' : ''}>{description}</p>
            <div className='d-flex flex-row-reverse px-3'>
                <button className='task-delete-btn'><FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Task;