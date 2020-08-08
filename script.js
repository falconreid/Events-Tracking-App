//event brite tone
// const ctx = new (window.AudioContext || window.webkitAudioContext)();

// const osc = ctx.createOscillator();

// osc.connect(ctx.destination);


const play = document.getElementById("play");
play.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();

  osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});

//meetup tone

//pull user events
//append user events to list or calender view

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
