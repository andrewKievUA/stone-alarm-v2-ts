import React,{useState,useEffect} from 'react';

const FactoryAlarm: React.FC = () => {



    const [type, setType] = useState("users");
    const [data,setData]=useState([])
    useEffect(()=>{
        console.log("render inside useEffect")
        fetch(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays.json`)
            .then(response => response.json())
            .then(json =>{
                    let z = Object.values([[Object.values(json)][0]])[0]

                console.log(Object.values([z]))
                    setData(json)
            }

                )

    },[type])




    return (
        <div>
            This is factory alarm
            {JSON.stringify(data,null,2)}
            {/*{todos.map(el => {*/}
            {/*        return (*/}
            {/*            <li className="todo">*/}
            {/*   */}
            {/*            </li>*/}
            {/*        )*/}
            {/*    }*/}
            {/*)}*/}
        </div>
    );
};

export default FactoryAlarm;

//
// import "./styles.css";
// import React, { useEffect, useState } from "react";
//
// export default function App() {
//     const [type, setType] = useState("users");
//     const [data,setData]=useState([])
//     useEffect(()=>{
//         console.log("render inside useEffect")
//         fetch(`https://alarmstonelight-default-rtdb.europe-west1.firebasedatabase.app/arrays.json`)
//             .then(response => response.json())
//             .then(json => setData(json))
//     },[type])
//
//
//     return (
//         <div className="App">
//             {type}
//
//             <h1>Hello CodeSandbox</h1>
//             <h2>Start editing to see some magic happen!</h2>
//             <button
//                 onClick={() => {setType("Danil");}}>{" "}Danil
//             </button>
//             <button
//                 onClick={() => {setType("Lili");}}>{" "}Lili
//             </button>
//             {JSON.stringify(data,null,2)}
//         </div>
//     );
// }
