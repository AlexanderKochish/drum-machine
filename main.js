import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="wrapper">
  <div class="container"></div>
  </div>
`

setupCounter(document.querySelector('#counter'))
