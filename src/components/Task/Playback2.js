
function singBird2(){

    const player = document.querySelector(".mission .player");
    const play = document.querySelector(".mission .play");
    const pause = document.querySelector(".mission .pause");

    function progressUpdate() {
        const positionBar = document.querySelector(".mission .position-bar");
        positionBar.style.width = (player.currentTime / player.duration * 100)  + "%";       
      
        const playStatus = document.querySelector(".mission .play-status");
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

export default singBird2;