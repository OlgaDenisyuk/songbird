import React from 'react';
import './Mission.css';

const Mission = () => {
    return <section className="mission">
        <div className="mission__list">
            <ul id="mission">
                <li><span class="li-btn"></span>Ворон</li>
                <li><span class="li-btn"></span>Журавль</li>
                <li><span class="li-btn"></span>Ласточка</li>
                <li><span class="li-btn"></span>Козодой</li>
                <li><span class="li-btn"></span>Кукушка</li>
                <li><span class="li-btn"></span>Синица</li>
            </ul>
        </div>
        <div className="mission__info">
            Послушайте плеер.<br></br>
            Выберите птицу из списка
        </div>
    </section>
}

export default Mission;