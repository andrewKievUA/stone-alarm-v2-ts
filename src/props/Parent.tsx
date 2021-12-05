import React from 'react';
import {ChildAsFC} from "./Child";


const Parent = () => {
    return (
        <div>
            Parent
            {/*s*/}
            <ChildAsFC color={"red"} onClick={()=>console.log("clicked")}/>

        </div>
    );
};

export default Parent;
