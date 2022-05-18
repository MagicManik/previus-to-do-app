import { useEffect, useState } from "react"

const useTasks = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch('task.json')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [])

    return [tasks, setTasks];
}

export default useTasks;