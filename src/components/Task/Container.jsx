import React from 'react';
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
                <button className ="play"></button>
                <button className ="pause"></button>
            </div> 
            <div className="player-container">
                <div class="duration-bar">
                    <div class ="position-bar"><span class="display-status"></span></div>
                </div>
            </div>
        </div>
        <div class="play-status"></div>
    </div>
    </div>
    <div className ="descr">{props.text}</div>
    </div> 
    }

export default Container;