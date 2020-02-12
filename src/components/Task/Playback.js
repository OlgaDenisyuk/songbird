
function singBird(){

    const player = document.querySelector(".player");
    const play = document.getElementById("play");
    const pause = document.getElementById("pause");

    function progressUpdate() {
        const positionBar = document.getElementById("position-bar");
        positionBar.style.width = (player.currentTime / player.duration * 100)  + "%";       
      
        const playStatus = document.getElementById("play-status");
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