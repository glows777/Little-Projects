const video=document.getElementById('video');
const play=document.getElementById('play');
const stops=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

//控制播放暂停
function toggleVideoStatus(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}


//更新播放的图标
function updatePlayIcon(){
    if(video.paused){
        play.innerHTML='?<i class="fa fa-play fa-2x"></i>';
    }
    else{
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
    }
}
//更新进度条和时间
function updateProgress(){
    progress.value=(video.currentTime/video.duration)*100;



// 获取分钟和秒
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10) {
        mins='0'+String(mins);
    }

    let secs=Math.floor(video.currentTime%60);
    if(secs<10){
        secs='0'+String(secs);
    }
    timestamp.innerHTML=`${mins}:${secs}`;
}

//设置进度条的改动
function setVideoProgress(){
    video.currentTime=(+progress.value*video.duration)/100;
}

//停止播放 回到原点
function stopVideo(){
    video.currentTime=0;
    video.pause();
}


//添加事件监听器
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
play.addEventListener('click', toggleVideoStatus);
stops.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);