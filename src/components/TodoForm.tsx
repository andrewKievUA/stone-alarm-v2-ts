import React, {useRef, useState} from 'react';


interface TodoFormProps {
    onAdd(title:string):void
}

const TodoForm: React.FC <TodoFormProps>= (props) => {
    const [title, setTitle] = useState<string>("")

    const ref=useRef<HTMLInputElement>(null)

// const ChangeHandler= (event:React.ChangeEvent<HTMLInputElement>)=>{
// setTitle(event.target.value)
// }

const keyPressEnter = (event: React.KeyboardEvent)=>{
  if (event.key ==="Enter"){
       setTitle("")
       console.log(ref.current!.value)

  }

}
    return (
        <div className="input-field">

            <input
                type="text"
                id={"title"}
                ref={ref}
               // onChange={ChangeHandler}
                onKeyPress={keyPressEnter}
            />
            <label htmlFor="title" className="active">Введите название задачи</label>
            {title}
        </div>

    );
};

export default TodoForm;
