import React from 'react';
const Task = ({ taskName }) => {
    return (
        <td className="pl-4" >
            <input type="checkbox" className="form-check-input" value={taskName} />
            {taskName}
        </td>

    )
}

export default Task