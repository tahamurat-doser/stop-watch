const playButton = document.querySelector(".play");
const resetButton = document.querySelector(".reset");
const second = document.querySelector(".sec");
const centiSecond = document.querySelector(".msec");
const minute = document.querySelector(".minute");
const bg=document.querySelector(".outer-circle");
let min;
let minCounter=0
let sec;
let secCounter=0
let centiSec;
let centiCounter=0
let isPlay=false;
const clear=()=>{playButton.textContent="Play"
    isPlay=false
    clearInterval(sec);
    clearInterval(centiSec);
    clearInterval(min);
    }
const play=()=>{
    if(isPlay===false){
        playButton.textContent="pause"
        isPlay=true;
        min=setInterval(()=>{
            minute.textContent=`${++minCounter}:`
        },60*1000)
        sec=setInterval(()=>{
            if(secCounter===59){
                secCounter=0
            }
            second.textContent=`${++secCounter}:`
        },1000)
        centiSec=setInterval(()=>{
            if(centiCounter===100){
                centiCounter=0
            }
            centiSecond.textContent=`${++centiCounter}`;
        },10)
    }else{clear()
        
    }
    bg.classList.add("animation-bg");
}
const reset=()=>{
     clear()
    second.textContent="0:"
    centiSecond.textContent="0"
    minute.textContent="0:"
    centiCounter=0
    secCounter=0
    minCounter=0
    bg.classList.remove("animation-bg");
}
playButton.addEventListener("click",play)
resetButton.addEventListener("click",reset)