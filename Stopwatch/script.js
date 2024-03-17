btnstart=document.querySelector('#start')
btnstop=document.querySelector('#stop')
btnreset=document.querySelector('#reset')

let hr=min=sec=ms=0;

btnstart.addEventListener('click',()=>{

    setTimer=setInterval(()=>{
    btnstart.classList.add('start-active');
    btnstop.classList.remove('stop-active');
    ms++;
    if (ms==100){
        sec++;
        ms=0;
    }
    if (sec==60){
        min++;
        sec=0;
    }
    if (min==60){
        hr++;
        min=0;
    }
    Updatedisplay();
},10);
});

btnstop.addEventListener('click',()=>{

    btnstart.classList.remove('start-active');
    btnstop.classList.add('stop-active');
clearInterval(setTimer);
});

btnreset.addEventListener('click',()=>{
    
    btnstart.classList.remove('start-active');
    btnstop.classList.remove('stop-active');
    hr=min=sec=ms=0;
    Updatedisplay();
});

function Updatedisplay(){
    phr=hr<10?'0'+hr:hr;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;

    document.getElementById('hr').innerHTML=phr;
    document.getElementById('min').innerHTML=pmin;
    document.getElementById('sec').innerHTML=psec;
    document.getElementById('ms').innerHTML=pms;
}