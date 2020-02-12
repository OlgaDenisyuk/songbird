import React from 'react';
import birdsData from './Birds';
import Container from '../Task/Container';

const Description = (props) => {
    const randomSrc = Math.floor(Math.random()*6);

    return  <div className="mission__info">
                <Container></Container>
            </div>
}

export default Description;