

  //web audio api test

//eventbrite tone
 
// const audioCtx = new AudioContext();
// const osc = audioCtx.createOscillator();
// const play = document.getElementById("play");
// const meet = document.getElementById("meet");


// osc.type = "square";
// osc.frequency.setValueAtTime(400, audioCtx.currentTime);

// function startOsc(){
//   osc.connect(audioCtx.destination);
//   osc.start();
//   osc.stop(audioCtx.currentTime + .5);
// }
// play.addEventListener('click', startOsc);
// meet.addEventListener('click', startOsc);

const ctx = new (window.AudioContext || window.webkitAudioContext());
const play = document.getElementById("play");
const meet = document.getElementById("meet");

function Oscillator(frequency, detune){
  this.osc = ctx.createOscillator()
  this.osc.type = 'sawtooth';
  this.osc.frequency.value = frequency;
  this.osc.detune.value = detune;
  this.osc.connect(ctx.destination);
  this.osc.connect(ctx.destination);
  
console.log(ctx.state);
const osc1 = new Oscillator(440, 0);
const osc2 = new Oscillator(440, 10);

play.addEventListener('click', () => {
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state)
  };
});

// meet.addEventListener('click', () => {
//   ctx.resume().then(() => console.log(state))
// });


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.datepicker'); 
//   var instances = M.Datepicker.init(elems, options);
// });

// // Or with jQuery

// $(document).ready(function(){
//   $('.datepicker').datepicker();
// });






};
