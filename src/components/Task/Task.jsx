import React from 'react';
import './Task.css';
import birdsData from './../Mission/Birds';
import Container from './Container';

const Task = (props) => {

    return <section className="task-section">
        <Container text={birdsData[0][0].text}></Container>
    </section>
}

export default Task;