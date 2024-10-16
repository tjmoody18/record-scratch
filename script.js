const turntable = document.querySelector(".turntable");
const container = document.querySelector(".container");

// Prevent mouse drag behavior
turntable.addEventListener("dragstart", (e) => {
  e.preventDefault();
})

container.addEventListener("dragstart", (e) => {
  e.preventDefault();
})

// Prevent touch drag behavior
turntable.addEventListener("touchmove", (e) => {
  e.preventDefault();
});

container.addEventListener("dragstart", (e) => {
  e.preventDefault();
})

// Prevent context menu for long-press on mobile
turntable.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});


turntable.addEventListener("mousedown", () => {
  turntable.classList.add("clicked")
  let audio = new Audio("https://tjmoody18.github.io/record-scratch/sounds/record_scratch2.mp3")
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