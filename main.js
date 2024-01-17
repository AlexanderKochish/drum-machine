import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="wrapper">
  <div class="container">
  <div class="drum-container">
  <button>1</button>
  <button>2</button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  <button></button>
  </div>
  </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
