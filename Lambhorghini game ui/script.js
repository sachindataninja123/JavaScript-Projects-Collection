// const audio = document.createElement("audio");
// audio.setAttribute("src", "sound.mp3");
// audio.loop = true;
// audio.play();

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.createElement("audio");
  audio.setAttribute("src", "sound.mp3");
  audio.loop = true;

  document.body.addEventListener("click", () => {
    audio.play();
  });
});
