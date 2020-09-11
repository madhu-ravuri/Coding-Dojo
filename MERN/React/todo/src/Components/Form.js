import React, { useState } from 'react';

const Form = (props) => {
    const {tasks, setTasks} = props; 

    const [task, setTask] = useState({ name: "", status: false });

    const onChange = (e) => {
        setTask({
            name: e.target.value,
            status: false,
        });
    };

    const addTask = (e) => {
        e.preventDefault();

        const newTasks = [...tasks, task];
        setTasks(newTasks);

        setTask({ name: "", status: false});
    }

    return(
        <div>
            <form onSubmit={(addTask)}>
                <input type="text" onChange={onChange} value={tasks.name}></input>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form