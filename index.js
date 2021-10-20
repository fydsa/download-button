const button = document.querySelector("button");

const span_button = document.querySelector("button > div:nth-child(1) > span");

const div_button_first = document.querySelector("button > div:nth-child(1)");

const div_button = document.querySelector("button > div:nth-child(2)");

const downloading_state = document.querySelector(".downloading");

const loading_icon = document.querySelector("#loading");

const loading_arrow = document.querySelector("svg > symbol#loading > g");

const done_icon = document.querySelector("#done");

const svg_el = document.querySelector("svg");

svg_el.style.display = "none";

button.addEventListener("click", clickHandler);

function clickHandler() {
  let hit = document.createElement("div");
  button.append(hit);
  hit.className = "hit-circle";

  button.style.animation = "bounce-button 0.7s";

  setTimeout(() => {
    button.style.animation = "none";
    hit.remove();

    div_button_first.style.width = "50%";
    svg_el.style.display = "inline";
    div_button.className = "downloading";
    span_button.textContent = "Loading";

    loading_icon.style.display = "inline";
    done_icon.style.visibility = "hidden"; //firefox issue
    loading_icon.style.visibility = "visible";
    loading_arrow.style.animation = "loading-arrow 1s ease-in-out infinite";
    span_button.style.color = "#ffffff";
  }, 750);

  setTimeout(() => {
    loading_icon.style.visibility = "hidden";
    done_icon.style.visibility = "visible";
    done_icon.style.display = "inline";
    div_button.classList.remove("downloading");

    div_button_first.style.width = "40%";
    div_button.className = "done";
    span_button.textContent = "Done";
    span_button.style.color = "#ffffff";
    done_icon.style.display = "inline";
  }, 3700);

  setTimeout(() => {
    done_icon.style.display = "none";
    div_button.classList.remove("done");

    span_button.textContent = "Download";
    span_button.style.color = "#000000";
  }, 7000);
}
