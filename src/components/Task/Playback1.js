
function singBird(){

    const player = document.querySelector(".task-section .player");
    const play = document.querySelector(".task-section .play");
    const pause = document.querySelector(".task-section .pause");

    function progressUpdate() {
        const positionBar = document.querySelector(".task-section .position-bar");
        positionBar.style.width = (player.currentTime / player.duration * 100)  + "%";       
      
        const playStatus = document.querySelector(".task-section .play-status");
        playStatus.innerHTML = (Math.round(player.currentTime*100)/100) + " сек";
      
      }

      player.ontimeupdate = () => { progressUpdate() };
      play.onclick = () => { 
        player.play(); 
        pause.style.display = 'block';
        play.style.display = 'none';
      };
      pause.onclick = () => { 
        player.pause(); 
        play.style.display = 'block';
        pause.style.display = 'none';
      };
}

export default singBird;