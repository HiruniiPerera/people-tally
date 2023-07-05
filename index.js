let count = 0;
let saveEl = document.getElementById("save-el");
let sum = 0;

function increment() {
  count++;
  sum++;
  document.getElementById("counter").innerText = count;
}

function save() {
  let savedStr = count + " - ";
  saveEl.textContent += savedStr;
  count = 0;
  document.getElementById("counter").innerText = count;
  let totalEl = document.getElementById("total-el");
  totalEl.innerText = "Total: "+sum;
  console.log(count);
}
