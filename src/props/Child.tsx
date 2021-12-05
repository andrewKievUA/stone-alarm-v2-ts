import React,{useState} from 'react';

interface ChildProps {
    color: string
    onClick:()=>void
}

export const ChildAsFC:React.FC <ChildProps> = ({color,onClick}) => {
    return (
        <div>
            ChildAsFC {color}
            <button onClick={onClick}>Click Me</button>
        </div>
    );
};


