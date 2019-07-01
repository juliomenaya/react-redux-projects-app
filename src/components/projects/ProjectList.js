import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

// recibe props como parametro
// pero se hace la deestructuring, entonces en el cuerpo de la function
// tenemos la propiedad 'projects' que se encuentra en props

const ProjectList = ({projects}) => {     
    return (
        <div className="project-list section">
            {/* haciendo la operacion AND, nos aseguramos de que 
            el objeto 'projects' tenga algo guardado */}
            {projects && projects.map(project => {                
                return (
                    <Link to={'/project/' + project.id} key={project.id}> {/*liga a ProjectDetails*/}
                         {/* al componente ProjectSummary le enviamos las propiedades project y key*/}
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}     
        </div>
    )
}

export default ProjectList