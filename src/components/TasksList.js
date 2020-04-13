import React from 'react';
import Task from './Task';


const TasksList = ({ tasksList }) => {


    return (
        <tbody>
            {tasksList.map(task =>
                <tr key={task.index + task.taskName} className="border border-1 pl-4 ">
                    <Task taskName={task.taskName} />
                </tr>)}
        </tbody>);
}

export default TasksList