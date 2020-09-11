import React, { useState } from 'react';

const Todo = (props) => {
    const { tasks, setTasks } = props;

    const handleDelete = (deleteIndex) => {
        const newTasks = tasks.filter((task, i) => {
            return i !== deleteIndex;
        })
        setTasks(newTasks);
    }

    const handleCheck = (i) => {
        const copiedTasks = [...tasks];
        copiedTasks[i].status = !copiedTasks[i].status;

        setTasks(copiedTasks);
    }

    return (
        <div>
            {tasks.map((task, i) => {
                const taskStyle = {
                    display: "inline-block"
                };

                if (task.status) {
                    taskStyle.textDecoration = "line-through";
                }
                return (
                    <div key={i}>
                        <p style={taskStyle}>{task.name}</p>
                        <div>
                            <label htmlFor="checkbox">Completed?</label>
                            <input onChange={(event) => handleCheck(i)} type="checkbox" checked={task.status}></input>
                            <button onClick={(event) => handleDelete(i)}>Delete</button>
                        </div>
                    </div>
                );
            })}

        </div>
    );
}

export default Todo;