import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="inner-container">
  <div class="pad-bank">
  <div class="drum-pud" id="Heater-1"></div>
  <div class="drum-pud" id="Heater-2"></div>
  <div class="drum-pud" id="Heater-3"></div>
  <div class="drum-pud" id="Heater-4"></div>
  <div class="drum-pud" id="Clap"></div>
  <div class="drum-pud" id="Open-HH"></div>
  <div class="drum-pud" id="Kick-n'-Hat"></div>
  <div class="drum-pud" id="Kick"></div>
  <div class="drum-pud" id="Closed-HH"></div>
  </div>
  <div class="controls-container"></div>
  </div>
`

setupCounter(document.querySelector('#counter'))
