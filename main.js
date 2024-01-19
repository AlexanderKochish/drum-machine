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
      <div class="power-container">
      <span>Power</span>
        <div class="power">
          <div class="power-select"></div>
        </div>
      </div>
      <div class="volume-panel">Volume: </div>
      <input type="range" id='rangeVolume'/>
      <div class="bank-container">
      <span>Bank</span>
        <div class="bank">
          <div class="bank-select"></div>
        </div>
      </div>
    </div>
    </div>
  </div>
`;

  let volumePanel = document.querySelector(".volume-panel");
  let padBank = document.querySelector(".pad-bank");
  let drupPud = document.querySelectorAll(".drum-pud");
  let clip = document.querySelectorAll(".clip");
  let rangeVolume = document.querySelector("#rangeVolume");
  let power = document.querySelector(".power");
  let body = document.querySelector("body");
  let powerTriger = false;  
  

  function togglePower(e){
    if(e.target.classList.contains("power-select") || e.target){
      power.classList.toggle('active')
      if(power.classList.contains('active')){
        powerTriger = true;
      }else{
        powerTriger = false;
      }
    }
  }

  power.addEventListener('click', (e) => togglePower(e));

  function volumeDrum(e) {
    clip.forEach((item) => {
      if(!powerTriger){
        rangeVolume.step = 0.01;
        rangeVolume.min = 0;
        rangeVolume.max = 1;
        volumePanel.textContent = `Volume: ${rangeVolume.value.split('.')[1]}`;
        item.volume = e.target.value;
        item.disabled = false;
      }else{
        item.disabled = true;
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
    body.addEventListener('keypress', (e) => {
      if(powerTriger) return;
      if(clip[i].id.toLowerCase() == e.key && !drupPud[i].classList.contains('active')){
        drupPud[i].classList.add('active')
        clip[i].play();
        setTimeout(() => removeActive(), 300)
      }
    })
  });

  drupPud.forEach((item, i) => {
    item.textContent = clip[i].id;
    item.addEventListener("click", (e) => {
      if(powerTriger) return;
      if(!e.target.classList.contains('active') && e.target){
        e.target.classList.add('active')
        clip[i].play();  
        setTimeout(() => removeActive(), 300)
      }
    })
  });
});
