import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#app").innerHTML = `
  <div class="inner-container">
  <div class='display-pad-bank'>
    <div class="pad-bank">
        <div class="drum-pud" id="Heater-1">
          <audio class="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
        </div>
        <div class="drum-pud" id="Heater-2">
          <audio class="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
        </div>
        <div class="drum-pud" id="Heater-3">
          <audio class="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
        </div>
        <div class="drum-pud" id="Heater-4">
          <audio class="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
        </div>
        <div class="drum-pud" id="Clap">
          <audio class="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
        </div>
        <div class="drum-pud" id="Open-HH">
          <audio class="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
        </div>
        <div class="drum-pud" id="Kick-n'-Hat">
          <audio class="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
        </div>
        <div class="drum-pud" id="Kick">
          <audio class="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
        </div>
        <div class="drum-pud" id="Closed-HH">
          <audio class="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
        </div>
    </div>
    <div class="controls-container">
      <div class="volume-panel">Volume: </div>
      <input type="range" id='rangeVolume'/>
      <input type="" id="switchOff"/>
    </div>
    </div>
  </div>
`;

  let volumePanel = document.querySelector(".volume-panel");
  let padBank = document.querySelector(".pad-bank");
  let drupPud = document.querySelectorAll(".drum-pud");
  let clip = document.querySelectorAll(".clip");
  let rangeVolume = document.querySelector("#rangeVolume");

  function volumeDrum(e) {
    clip.forEach((item) => {
      rangeVolume.min = 0;
      rangeVolume.max = 100;
      volumePanel.textContent = `Volume: ${rangeVolume.value}`;
      switch (e.target.value) {
        case "100":
          return (item.volume = 1.0);
        case "90":
          return (item.volume = 0.9);
        case "80":
          return (item.volume = 0.8);
        case "70":
          return (item.volume = 0.7);
        case "60":
          return (item.volume = 0.6);
        case "50":
          return (item.volume = 0.5);
        case "40":
          return (item.volume = 0.4);
        case "30":
          return (item.volume = 0.3);
        case "20":
          return (item.volume = 0.2);
        case "10":
          return (item.volume = 0.1);
        case "0":
          return (item.volume = 0.0);
        default:
          return (item.volume = 0.1);
      }
    });
  }

  volumePanel.textContent = `Volume: ${rangeVolume.value}`;
  rangeVolume.addEventListener("input", (e) => volumeDrum(e));

  function removeActive(){
    drupPud.forEach((item, i) => {
      item.classList.remove('active')
    })
  }

  drupPud.forEach((item, i) => {
    item.textContent = clip[i].id;
    item.classList.remove('active')
    item.addEventListener("click", (e) => {
      removeActive()
      if(!e.target.classList.contains('active') && e.target){
        e.target.classList.add('active')
        clip[i].play();  
        setTimeout(() => removeActive(), 300)
      }
      
    });
  });
});
