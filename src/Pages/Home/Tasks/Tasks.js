import React from 'react';
import useTasks from '../../../hooks/useTasks';
import Task from '../Task/Task';
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useTasks();
    // console.log(tasks);



    return (
        <section className='tasks-container'>
            {
                tasks.map(task =>
                    <Task
                        key={task._id}
                        task={task}
                    >
                    </Task>)
            }
        </section>
    );
};

export default Tasks;