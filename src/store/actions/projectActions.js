
// El metodo a la vieja escuela

// const ADD_PROJECT = 'ADD_PROJECT'
// export const createProject = (propject) => {
//     return {
//         type: ADD_PROJECT,
//         project: project
//     }
// }
 
// el argumento 
export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // console.log(project)
        // se hace la llamada asincrona
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid        
        firestore.collection('projects').add({
            ...project, // content and title
            aothorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project: project })
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err})
        })
    }
}