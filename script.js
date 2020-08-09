//event brite tone

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

//calendar tone

const cal = document.getElementById("cal");
cal.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 300;
  osc.connect(amp.gain);

  const filter = ctx.createBiquadFilter();

  filter.frequency.value = 550;

  osc.connect(filter);
  filter.connect(ctx.destination);

  //osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});

//list tone
const listEvents = document.getElementById("listEvents");
listEvents.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 350;
  osc.connect(amp.gain);

  const filter = ctx.createBiquadFilter();

  filter.frequency.value = 650;

  osc.connect(filter);
  filter.connect(ctx.destination);

  //osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});








//pull user events
//append user events to list or calender view


// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// Or with jQuery
// document.getElementById("cal");
// cal.addEventListener('click', ()=>{
//   $('.datepicker').datepicker();
// });


// document.getElementById("cal");
// cal.addEventListener('click', ()=>{
//   $(document).ready(function(){
//     $('#cal').datepicker();
//   })
// });


// $(document).ready(function(){
//   $('.datepicker').datepicker();
// });

$(document).ready(function () {
  $("img#listView").on("click", function () {
    $(".collection").fadeToggle(1000);
  });
});

$(document).ready(function () {
  $("img#datepicker").on("click", function () {
      $(".datepicker").click();
  });

  $(".datepicker").datepicker();
});

