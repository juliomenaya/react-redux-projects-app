import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2Br6s_YKNcdOB_8q-c3ofMna-4BaRcTk",
    authDomain: "react-redux-projects-app.firebaseapp.com",
    databaseURL: "https://react-redux-projects-app.firebaseio.com",
    projectId: "react-redux-projects-app",
    storageBucket: "",
    messagingSenderId: "211754805316",
    appId: "1:211754805316:web:0464bf1e64b6326f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()/*.settings({ timestampsInSnapshots: true })*/


export default firebase