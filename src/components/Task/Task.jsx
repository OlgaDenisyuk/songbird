import React from 'react';
import './Task.css';
import bird from './bird.jpg';

const Task = () => {
    return <section className="task-section">
        <div className="task-section__img">
            <img src={bird} className="bird-pict" alt="Bird" />
        </div>
        <div className="task-section__player">
            <div className="task-section__name">* * * * * *</div>
            <div className="task-section__audio">
                <audio src="https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3" controls></audio> 
            </div>
        </div>
    </section>
}

export default Task;