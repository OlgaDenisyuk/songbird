import React from 'react';
import './Task.css';
import bird from './bird.jpg';
import Player from './Player';
import birdsData from './../Mission/Birds';
import Container from './Container';

const Task = (props) => {
    const randomSrc = Math.floor(Math.random()*6);

    return <section className="task-section">
        <Container text={birdsData[0][0].text}></Container>
    </section>
}

export default Task;