import React, { Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {
    render(){          
        // se traduce a "de this.props, toma la propiedad projects y asignalo"
        const { projects, auth, notifications } = this.props
             
        if (!auth.uid) return <Redirect to='/signin' />

        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications notifications={notifications}/>
                    </div>
                </div>
            </div>
        )
    }
}

// esta funcion mapea las propiedades que seran utilizadas por el 
// componente desde el reduce 'rootReducer' (quien es la combinacion de projectReducer y authReducer)
// rootReducer tiene una propiedad 'project' para indicarle que se debe ligar a 'projectReducer'
// que es donde estan definidos los estados y acciones de project

const mapStateToProps = (state) => {    
    return {
        // projects: state.project.projects //Datos hardcodeados
        /**Despues de que se hace la conexion con firestore
         * los datos ya se pueden tomar desde esa base y
         * ya no se usarán los datos que teniamos hardcodeados
         */
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}

//higher order component
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] }, // es la coleccion a la que se debe conectar firestore
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)