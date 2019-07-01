const initState = {
    projects: [
        {id: '1', title: 'how to do a "how to do video"', content: 'Hello ma friends!'},
        {id: '2', title: 'how to be a good suplent worker', content: 'For Cardio, you do not even exists'},
        {id: '3', title: 'how to faltosear at the Cardio dinning room', content: 'Ah salu!'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
            return state
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state
        default:
            return state
    }    
}

export default projectReducer