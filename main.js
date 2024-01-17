import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="wrapper">
  <div class="container">
  <div class="drum-container"></div>
  </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
