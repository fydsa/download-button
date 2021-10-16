const button = document.querySelector("button");

const span_button = document.querySelector("button > span");

const div_button = document.querySelector("button > div");

const downloading_state = document.querySelector(".downloading");

button.addEventListener("click", clickHandler);

function clickHandler() {
  let hit = document.createElement("div");
  button.append(hit);
  hit.className = "hit-circle";

  setTimeout(() => {
    hit.remove();
    div_button.className = "downloading";
    span_button.textContent = "Loading";
    span_button.style.color = "#ffffff";
  }, 1000);

  setTimeout(() => {
    div_button.classList.remove("downloading");
    span_button.textContent = "Download";
    span_button.style.color = "#000000";
  }, 5000);
}
