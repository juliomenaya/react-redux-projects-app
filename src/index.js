import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { authIsReady } from 'react-redux-firebase'
import firebase from './config/fbConfig'

// thunk es un middleware que nos ayuda a realizar peticiones de forma asincrona
// se debe utilizar ya que si quisieramos hacer la peticion desde un reducer y actualizar un 
// estado, el propio reducer retornaria un estado indeseado dada la sincronia de la peticion
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, { useFirestoreForProfile: true, userProfile: 'users', attachAuthIsReady: true })
    )
)
// thunk.withExtraArgument() nos permite pasar objetos al applyMiddleware, de esta forma las acciones podrán 
// accedes a estos objetos, que en este caso son utilizados para conectarse a firebase y firestore

// store.attachAuthIsReady.then(() => {
authIsReady(store).then(() => { 
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, 
        document.getElementById('root'));
    
    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();
})


