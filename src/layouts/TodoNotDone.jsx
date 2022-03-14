import React from 'react'
import { Button } from 'antd';
import { Divider } from 'antd';

export default function TodoNotDone({ todos, setTodoDone, setTodo }) {

    function handleAddTodo(todo) {
        setTodoDone(prevTodoDone => [...prevTodoDone, todo]);
        setTodo(prevTodo => prevTodo.filter((value) => value !== todo));
    }

    return (
        <>
            <Divider plain>Active Todos</Divider>

            <ul>
                {todos.map((todo,i) => <li className='Todo-li' key={i}>{todo} <Button key={i} className='Complete-todo-button' type="primary" onClick={() => handleAddTodo(todo)}>Complete</Button></li> )}
            </ul>
        </>
    )
}
