import React from 'react';
import './Mission.css';
import Item from './Item';
import birdsData from './Birds';
import Description from './Description';

const Mission = () => {
const tour = 0;

    return <section className="mission">
        <div className="mission__list">
            <ul id="mission">
                <Item name = {birdsData[tour][0].name}></Item>
                <Item name = {birdsData[tour][1].name}></Item>
                <Item name = {birdsData[tour][2].name}></Item>
                <Item name = {birdsData[tour][3].name}></Item>
                <Item name = {birdsData[tour][4].name}></Item>
                <Item name = {birdsData[tour][5].name}></Item>
            </ul>
        </div>
        <div className="mission__instruction">
            Послушайте плеер.<br></br>
            Выберите птицу из списка
        </div>
        <Description></Description>
    </section>
}

export default Mission;