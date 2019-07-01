import authReducer from './authReducer'
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'


// Combina los reducers 
const rootReducer = combineReducers({
    // Todas estas propiedades son accedidas en las funciones mapStateToProps
    //entonces para acceder a project desde mapStateToProps se escribe state.project
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer
