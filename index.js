const button = document.querySelector("button");

const span_button = document.querySelector("button > span");

const div_button = document.querySelector("button > div");

const downloading_state = document.querySelector(".downloading");

const loading_icon = document.querySelector("#loading");

const loading_arrow = document.querySelector("svg > symbol#loading > g");

const done_icon = document.querySelector("#done");

button.addEventListener("click", clickHandler);

function clickHandler() {
  let hit = document.createElement("div");
  button.append(hit);
  hit.className = "hit-circle";

  button.style.animation = "bounce-button 0.3s";

  setTimeout(() => {
    button.style.animation = "none";
    hit.remove();
    div_button.className = "downloading";
    span_button.textContent = "Loading";
    span_button.style.left = "7rem";
    loading_icon.style.display = "inline";
    loading_arrow.style.animation = "loading-arrow 1s ease-in-out infinite";
    span_button.style.color = "#ffffff";
  }, 1000);

  setTimeout(() => {
    loading_icon.style.display = "none";
    div_button.classList.remove("downloading");
    div_button.className = "done";

    span_button.textContent = "Done";
    span_button.style.color = "#ffffff";
  }, 3700);

  setTimeout(() => {
    div_button.classList.remove("done");

    span_button.textContent = "Download";
    span_button.style.color = "#000000";
  }, 8000);
}
