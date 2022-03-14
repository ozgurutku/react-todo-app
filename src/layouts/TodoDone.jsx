import React from 'react'
import { Divider } from 'antd';

export default function TodoDone({ todoDone }) {

    return (
        <>
            <Divider plain>Completed Todos</Divider>
            <ul>
                {todoDone.map((todo,i) => <li key={i}>{todo}</li>)}
            </ul>
        </>
    )
}
