import React from 'react'
import moment from 'moment'

const ProjectSummary = ({project}) => {        
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                {/* <p>Posted by Julio el Grande</p> */}
                <p>{project.content}</p>
                <p>Posted by {project.authorLastName} {project.aothorFirstName}</p>
                <p className="grey-text">{moment(project.createdAt.toDate().toString()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary