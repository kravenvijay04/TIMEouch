btnstart=document.querySelector('#start')
btnstop=document.querySelector('#stop')
btnreset=document.querySelector('#reset')

let hr=min=sec=ms=0;
btnstart.addEventListener('click',()=>{

})
btnstop.addEventListener('click',()=>{
    
})
btnreset.addEventListener('click',()=>{
    hr=min=sec=ms=0;
    Updatedisplay();
})

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