import React from 'react';

type TodoListProps = {
    todos: any[]
}

const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(el => {
                    return (
                        <li className="todo">
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <i className="material-icons red-text">delete</i>
                            </label>
                        </li>
                    )
                }
            )}
        </ul>
    );
};

export default TodoList;
