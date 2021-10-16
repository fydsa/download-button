const button = document.querySelector("button");

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
  }, 1000);

  setTimeout(() => {
    div_button.classList.remove("downloading");
  }, 2000);
}
