import React from 'react';

import firebase from "firebase/compat";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import {useCollectionData} from "react-firebase-hooks/firestore";
import {useAuthState} from "react-firebase-hooks/auth";

const App = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyA9SxNhvf12JItVSouSUhRE9hRPE6MQFC8",
        authDomain: "alarmstonelight.firebaseapp.com",
        databaseURL: "https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "alarmstonelight",
        storageBucket: "alarmstonelight.appspot.com",
        messagingSenderId: "1072750372215",
        appId: "1:1072750372215:web:d1401b086e280ec1466d72"
    }

    firebase.initializeApp(firebaseConfig)

    const firestore = firebase.firestore()
    const messagesRef = firestore.collection("message")

    type Message={
        age: number,
        name: string
    }

    const [message =[]] = useCollectionData<Message>(
        firestore.collection("message")
    )



    return (
        <div>
            {[message][0].map(el=>{
                return(

                    <div>{el.name} {el.age}</div>

                )
            })}
            This is a app
        </div>
    );
};

export default App;
