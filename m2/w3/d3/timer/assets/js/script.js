var timer = document.getElementById("timer");

function time(){
    let sec;
    if(sessionStorage.getItem("tim")){
        sec = Number(sessionStorage.getItem("tim"));
    }else{
        sec = 0
    }
    setInterval(function(){
        sec += 1;
        timer.innerHTML = `Tempo: ${sec}`
        sessionStorage.setItem("tim", sec);
    },1000)
}


time();