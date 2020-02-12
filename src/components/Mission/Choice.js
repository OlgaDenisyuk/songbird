import birdsData from './Birds';
import find from './Find';
import voice from './Voice';

const Choice = () => {
    const mission = document.getElementById('mission');
    let score = 5;
    
    mission.addEventListener("click", e => {
    const target = e.target.closest("li");
    const value = target.innerText;
    const mysrc = document.querySelector('.task-section audio').getAttribute('src');
    const arr = find(birdsData, value);
    const myArr = voice(birdsData, mysrc);

    const i = arr[0];
    const j = arr[1];

    const myi = myArr[0];
    const myj = myArr[1];

    if(i === myi && j=== myj){
        target.classList.add("my-class");
        document.querySelector('.task-section .task-section__name').innerHTML = birdsData[i][j].name;
        document.querySelector('.task-section .bird-pict').setAttribute('src', birdsData[i][j].image);
        document.querySelector('.task-section .task-section__img').style.background = 'none';
        document.getElementById('score').innerHTML = score;
    }
    else{
        target.classList.add("no-my-class");
        score --;
    }
    
    document.querySelector('.mission__instruction').style.display = 'none';
    document.querySelector('.mission__info').style.display = 'block';
    document.querySelector('.mission__info .bird-pict').setAttribute('src', birdsData[i][j].image);
    document.querySelector('.mission__info audio').setAttribute('src', birdsData[i][j].audio);
    document.querySelector('.mission__info .descr').innerHTML = birdsData[i][j].description;
    document.querySelector('.mission__info .task-section__name').innerHTML = birdsData[i][j].name;
    document.querySelector('.mission__info .task-section__species').innerHTML = birdsData[i][j].species;

  });
}

export default Choice;
