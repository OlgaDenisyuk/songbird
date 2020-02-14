import React from 'react';

const Player = (props) => {
    return <audio className = "player" src={props.src} hidden></audio> 
    }

export default Player;