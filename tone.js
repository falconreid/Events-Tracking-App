// const osc = new Tone.Oscillator().toDestination();
// // start at "C4"
// osc.frequency.value = "C4";
// // ramp to "C2" over 2 seconds
// osc.frequency.rampTo("C2", 2);
// // start the oscillator for 2 seconds
// osc.start().stop("+3");
// //attach a click listener to a play button
// document.querySelector('.dropdown-trigger').addEventListener('click', async () => {
//   await Tone.start()
//   console.log('audio is ready')
// })

const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
  synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
  synth.triggerRelease();
});

document.addEventListener("keydown", e => {
  switch (e.key) {
    case "q":
      return synth.triggerAttack("G#3");
    case "a":
      return synth.triggerAttack("A4");
    case "w":
      return synth.triggerAttack("A#4");
    case "s":
      return synth.triggerAttack("B4");
    case "d":
      return synth.triggerAttack("C4");
    case "r":
      return synth.triggerAttack("C#4");
    case "f":
      return synth.triggerAttack("D4");
    case "t":
      return synth.triggerAttack("D#4");
    case "g":
      return synth.triggerAttack("E4");
    case "h":
      return synth.triggerAttack("F4");
    case "u":
      return synth.triggerAttack("F#4");
    case "j":
      return synth.triggerAttack("G4");
    case "i":
      return synth.triggerAttack("G#4");
    case "k":
      return synth.triggerAttack("A4");
    case "o":
      return synth.triggerAttack("A#4");
    case "l":
      return synth.triggerAttack("B4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "q":
    case "a":
    case "w":
    case "s":
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
       synth.triggerRelease(); 
  }
});