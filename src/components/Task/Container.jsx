import React from 'react';
import bird from './bird.jpg';
import Player from './Player';
import birdsData from './../Mission/Birds';

const Container = (props) => {
const nmb = Math.floor(Math.random()*5);

    return <div>
    <div className = "container">
    <div className="task-section__img">
        <img src={props.image} className="bird-pict" alt="" />
    </div>
    <div className="task-section__player">
        <div className="task-section__name">* * * * * *</div>
        <div className="task-section__species">* * * * * *</div>
        <div className="task-section__audio">
            <Player src={birdsData[0][nmb].audio}></Player>
            <div className="player-controls">
                <button id="play"></button>
                <button id="pause"></button>
            </div> 
            <div className="player-container">
                <div id="duration-bar">
                    <div id="position-bar"><span id="display-status"></span></div>
                </div>
            </div>
        </div>
        <div id="play-status"></div>
    </div>
    </div>
    <div class ="descr">{props.text}</div>
    </div> 
    }

export default Container;