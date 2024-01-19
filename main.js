import "./style.css";
import { drums, drums2 } from "./drums";

document.addEventListener("DOMContentLoaded", () => {
  let volumePanel = document.querySelector(".volume-panel");
  let rangeVolume = document.querySelector("#rangeVolume");
  let power = document.querySelector(".power");
  let body = document.querySelector("body");
  let bank = document.querySelector(".bank");
  let padBank = document.querySelector(".pad-bank");
  let powerTriger = false;
  let bankTrigger = false;

  function toggleBank(e) {
    if (e.target.classList.contains("bank-select")) {
      bank.classList.toggle("active");
      bankTrigger = bank.classList.contains("active");
      updatePadBank(bankTrigger);
    }
  }

  bank.addEventListener("click", (e) => toggleBank(e));
  
  function bankList(arr) {
    return arr
      .map(
        ({ src, id, audioId }) => `
    <div class="drum-pud" id=${id}>
      <audio class="clip" id=${audioId} src=${src}></audio>
    </div>
    `
      )
      .join("");
  }

  function updatePadBank(trigger) {
console.log(trigger);
    padBank.innerHTML = `${trigger ? bankList(drums) : bankList(drums2)}`;
  }
  updatePadBank();

  let drupPud = document.querySelectorAll(".drum-pud");
  let clip = document.querySelectorAll(".clip");

  function togglePower(e) {
    if (e.target.classList.contains("power-select") || e.target) {
      power.classList.toggle("active");
      if (power.classList.contains("active")) {
        powerTriger = true;
      } else {
        powerTriger = false;
      }
    }
  }

  power.addEventListener("click", (e) => togglePower(e));

  function volumeDrum(e) {
    clip.forEach((item) => {
      if (!powerTriger) {
        rangeVolume.step = 0.01;
        rangeVolume.min = 0;
        rangeVolume.max = 1;
        volumePanel.textContent = `Volume: ${rangeVolume.value.split(".")[1]}`;
        item.volume = e.target.value;
        item.disabled = false;
      } else {
        item.disabled = true;
      }
    });
  }

  volumePanel.textContent = `Volume: ${rangeVolume.value}`;
  rangeVolume.addEventListener("input", (e) => volumeDrum(e));

  function removeActive() {
    drupPud.forEach((item, i) => {
      item.classList.remove("active");
    });
  }

  drupPud.forEach((item, i) => {
    item.textContent = clip[i].id;
    body.addEventListener("keypress", (e) => {
      if (powerTriger) return;
      if (
        clip[i].id.toLowerCase() == e.key &&
        !drupPud[i].classList.contains("active")
      ) {
        drupPud[i].classList.add("active");
        clip[i].play();
        setTimeout(() => removeActive(), 300);
      }
    });
  });

  drupPud.forEach((item, i) => {
    item.textContent = clip[i].id;
    item.addEventListener("click", (e) => {
      if (powerTriger) return;
      if (!e.target.classList.contains("active") && e.target) {
        e.target.classList.add("active");
        clip[i].play();
        setTimeout(() => removeActive(), 300);
      }
    });
  });

});
