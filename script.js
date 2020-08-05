$('.dropdown-trigger').dropdown();

$('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true
  });
  

  //web audio api test
 
const audioCtx = new AudioContext();
const osc = audioCtx.createOscillator();
const play = document.getElementById("play");


osc.type = "square";
osc.frequency.setValueAtTime(400, audioCtx.currentTime);

function startOsc(){
  osc.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + .5);
}
play.addEventListener('click', startOsc);


