import React, { Component } from 'react'
import TasksList from './TasksList';


export default class TodoMain extends Component {

    state = {
        projects: [],
        relatedtasks: [],
        selectedProject: ""
    }
    componentDidMount() {
        const url = `http://www.mocky.io/v2/5e90316a330000741327d563`
        fetch(url).then(res => res.json()).then(resp => {
            const { projects } = resp
            const { name } = projects[0]
            const { tasks = [] } = projects[0]
            this.setState({ projects: resp.projects, selectedProject: name, relatedtasks: tasks })
        })
    }
    updateProjectandRelatedTask = (selectedProject) => {
        const { projects } = this.state
        const { tasks } = projects.filter(project => project.name === selectedProject)[0]
        this.setState({ relatedtasks: tasks, selectedProject: selectedProject })
    }
    updateSelectedProject = (e) => {
        e.preventDefault()
        this.updateProjectandRelatedTask(e.target.value)

    }
    render() {
        const { projects, relatedtasks } = this.state
        return (
            <div className="column  col-xl-3 col-md-6  col-xl-3 col-sm-3 ">
                <table className="table table ml-4">
                    <thead className="border border-1 thead-light">
                        <tr >
                            <th><strong className="">Select Project:  </strong>
                                <select className="dropdown" onChange={this.updateSelectedProject} onKeyUp={this.updateSelectedProject}>
                                    {projects.map(el =>
                                        <option className="dropdown-item-text" key={el.index + el.name}>{el.name}</option>)}
                                </select>
                            </th>
                        </tr>
                    </thead>
                    <TasksList tasksList={relatedtasks} />
                </table>
            </div>
        )
    }
}

