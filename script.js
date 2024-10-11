let turntable = document.querySelector(".turntable");


turntable.addEventListener("mousedown", () => {
  turntable.classList.add("clicked")
  let audio = new Audio("https://tjmoody18.github.io/record-scratch/sounds/record_scratch.mp3")
  audio.play();
});

turntable.addEventListener("mouseup", () => {
  turntable.classList.remove("clicked");
});

turntable.addEventListener("touchend", () => {
  turntable.classList.remove("clicked");
});

turntable.addEventListener("mouseleave", () => {
  turntable.classList.remove("clicked");
});