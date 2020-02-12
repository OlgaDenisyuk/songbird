import React from 'react';

const Player = (props) => {
    return <audio class = "player" src={props.src} hidden></audio> 
    }

export default Player;