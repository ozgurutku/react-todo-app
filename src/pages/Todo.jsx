import React from 'react'
import { Input } from 'antd';
import { Row, Col } from 'antd';
import TodoAdd from '../layouts/TodoAdd';
import TodoHeader from '../layouts/TodoHeader';
import TodoDone from '../layouts/TodoDone';
import TodoNotDone from '../layouts/TodoNotDone';
import { useState } from 'react';

const { TextArea } = Input;

export default function Todo() {

    const [todo, setTodo] = useState([])
    const [todoDone, setTodoDone] = useState([])

    return (
        <div >

            <Row className='Todo-container'>
                <Col span={8}></Col>
                <Col span={8}>
                    <TodoHeader />
                    <TodoAdd setTodo={setTodo} />
                    <Row className='Todo-container'>
                        <Col span={12}>
                            <TodoNotDone todos={todo} setTodoDone={setTodoDone} setTodo={setTodo} />
                        </Col>
                        <Col span={12}>
                            <TodoDone todoDone={todoDone} />
                        </Col>
                    </Row>
                </Col>
                <Col span={8}></Col>
            </Row>

        </div>
    )
}
