function circle() {
  let a = document.querySelector("#bulb");

  let b = document.querySelector("button");

  let flag = 0;
  b.addEventListener("click", function () {
    if (flag == 0) {
      a.style.backgroundColor = "yellow";
      b.innerHTML = "Oh you clicked";
      flag = 1;
    } else {
      a.style.backgroundColor = "yellowgreen";
      b.innerHTML = "Click Me!";
      flag = 0;
    }
  });
}

let hitValue;
function hit() {
  hitValue = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitValue;
}

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 120; i++) {
    let random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector("#mainplayarea").innerHTML = clutter;
}
let time = 60;
function timer() {
  let interval = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timevalue").innerText = time;
    } else {
      clearInterval(interval);
      document.querySelector("#mainplayarea").style.flexDirection = "column";
      document.querySelector("#mainplayarea").innerHTML = `<h1>Game Over!</h1>
        <h2>Your Score is ${initial_score}</h2>`;
    }
  }, 1000);
}

initial_score = 0;
function score() {
  document.querySelector("#scoreval").textContent = `${(initial_score += 10)}`;
}

document
  .querySelector("#mainplayarea")
  .addEventListener("click", function (event) {
    clicked = Number(event.target.textContent);
    if (hitValue == clicked) {
      score();
      makeBubble();
      hit();
    }
  });

circle();
hit();
timer();
makeBubble();
