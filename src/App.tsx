import React, { useState } from 'react';

import firebase from "firebase/compat";
import "firebase/compat/firestore"
import "firebase/compat/auth"
import { useSelector, useDispatch } from 'react-redux'
import {useCollectionData} from "react-firebase-hooks/firestore";
//import {useAuthState} from "react-firebase-hooks/auth";

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

    const dispatch = useDispatch()
    firebase.initializeApp(firebaseConfig)
    const firestore = firebase.firestore()
    //const messagesRef = firestore.collection("alarms")

    type Message={
        id: number,
        time: string,
        comment: string,
        type:number
    }


     const initialObj:Message = {
        id: 0,
        time: "",
        comment: "",
        type:0
    }
    const [message =[[initialObj]]] = useCollectionData<any>(
        firestore.collection("alarms")
    )

  
  
//console.log(  message);
    return (
    <div>
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo hide-on-med-and-down" >Logo</a>
                <ul id="nav-mobile" className="right ">
                    <li><a href="" onClick={() => dispatch({ type: 'counter/incremented' })}>Аварии Сборщика</a></li>
                    <li><a href="" onClick={() => dispatch({ type: 'counter/incremented' })}>Общие Аварии</a></li>
                </ul>
            </div>
        </nav>
        <ul className="collection">
        <table className="striped">

             <tbody>
            { message[0].mainAlarms? 
            message[0].mainAlarms.map((el:Message)=>{
                return(
                    <tr key={el.id}>
                    <td>{el.comment}</td>
                    <td>{el.time.slice(11,-8)}</td>
                  </tr>
                       
                )
             })
            :null}
            </tbody>
       </table>
        </ul>


        
    </div>
    );
};

export default App;
