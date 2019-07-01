import React from 'react'
import { connect } from 'react-redux' // Conectar con el store de redux
import { firestoreConnect } from 'react-redux-firebase' // conectar a la base de datos
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

const ProjectsDetails = (props) => {
    // const id = props.match.params.id // Obtiene el id enviado desde el Link
    console.log(props)
    const { project } = props        
    const { auth } = props
    if (!auth.uid) return <Redirect to='/signin' />
    
    if (project) {
        return (  
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{ project.title }</span>
                        <p>{ project.content }</p>
                    </div>
                    <div className="card-action gray lighten-4 grey-text">
                        <div>{ project.authorFirstName } { project.authorLastName }</div>
                        <div>{moment(project.createdAt.toDate().toString()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading project</p>
            </div>
        )
    }
    
}

/**
 * 
 * @param {*} state 
 * @param { *propiedades del componente antes de que algo 
 * les sea agregado (son las propiedades que recibió el componente desde su padre)} ownProps 
 */
const mapStateToProps = (state, ownProps) => {
    console.log(state, ownProps)
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null
    return {
        project: project,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }])
)(ProjectsDetails)

