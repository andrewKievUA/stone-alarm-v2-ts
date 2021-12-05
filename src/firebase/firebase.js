import firebase from "firebase/compat";
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA9SxNhvf12JItVSouSUhRE9hRPE6MQFC8",
    authDomain: "alarmstonelight.firebaseapp.com",
    databaseURL: "https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "alarmstonelight",
    storageBucket: "alarmstonelight.appspot.com",
    messagingSenderId: "1072750372215",
    appId: "1:1072750372215:web:d1401b086e280ec1466d72"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
export const firestore = firebase.firestore()