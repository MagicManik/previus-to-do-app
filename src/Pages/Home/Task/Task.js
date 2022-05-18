import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Task.css'

const Task = ({ task }) => {
    const { name, description } = task;
    return (
        <div className='task-body'>
            <h5>{name}</h5>
            <p>{description}</p>
            <div>
                <button><FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Task;