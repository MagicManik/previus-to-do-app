import React from 'react';
import AddTask from './AddTask/AddTask';
import './Home.css'
import Tasks from './Tasks/Tasks';

const Home = () => {

    return (
        <main className='bg py-5'>
            <Tasks></Tasks>
            <AddTask></AddTask>
        </main>
    );
};

export default Home;