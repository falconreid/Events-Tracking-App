//event brite tone
// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const osc = ctx.createOscillator();

// osc.connect(ctx.destination);


const play = document.getElementById("play");
play.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 200;
  osc.connect(amp.gain);

  const filter = ctx.createBiquadFilter();

  filter.frequency.value = 250;

  osc.connect(filter);
  filter.connect(ctx.destination);

  //osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});

//meetup tone

const meet = document.getElementById("meet");
meet.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 250;
  osc.connect(amp.gain);

  const filter = ctx.createBiquadFilter();

  filter.frequency.value = 450;

  osc.connect(filter);
  filter.connect(ctx.destination);

  //osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});


// const play = document.getElementById("play");
// play.addEventListener("click", () => {
// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const audioElement = document.querySelector('audio');

// const mediaElement = ctx.createMediaElementSource(audioElement);

// mediaElement.connect(ctx.destination);
  
//   audio.start(0);
//   audio.stop(0.5);

//});


//pull user events
//append user events to list or calender view

// meet.addEventListener('click', () => {
//   ctx.resume().then(() => console.log(state))
// });

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// Or with jQuery
// document.getElementById("cal");
// cal.addEventListener('click', ()=>{
//   $('.datepicker').datepicker();
// });

$(document).ready(function(){
  $('.datepicker').datepicker();
});
