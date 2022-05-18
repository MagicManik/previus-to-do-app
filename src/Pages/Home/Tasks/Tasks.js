import React, { useState } from 'react';
import useTasks from '../../../hooks/useTasks';
import Task from '../Task/Task';
import './Tasks.css'

const Tasks = () => {
    const [tasks, setTasks] = useTasks();
    // console.log(tasks);
    const [lineThrough, setLineThrough] = useState(false);

    const handleTaskComplite = () => {
        setLineThrough(true);
        return alert('Task complite')
    }

    return (
        <section className='tasks-bg'>
            <div className='tasks-container'>
                {
                    tasks.map(task =>
                        <Task
                            key={task._id}
                            task={task}
                            lineThrough={lineThrough}
                        >
                        </Task>)
                }
            </div>

            <button onClick={handleTaskComplite} className='task-complite-btn'>Task Complite</button>
        </section>
    );
};

export default Tasks;