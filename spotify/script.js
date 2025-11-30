console.log("welcome to js");

let songIndex = 0;
let audioElement = new Audio("./song/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.querySelectorAll(".songItem"));

let songs = [
  {
    songName: "Asshiqui aa gyi",
    filePath: "./song/1.mp3",
    coverPath: "./covers/1.jpg",
  },
  {
    songName: "Laal pari",
    filePath: "./song/2.mp3",
    coverPath: "./covers/2.jpg",
  },
  {
    songName: "Tu hi hai Aasiqui",
    filePath: "./song/3.mp3",
    coverPath: "./covers/3.jpg",
  },
  {
    songName: "Ham tere bin ab reh",
    filePath: "./song/4.mp3",
    coverPath: "./covers/4.jpg",
  },
  {
    songName: "English song",
    filePath: "./song/5.mp3",
    coverPath: "./covers/5.jpg",
  },
  {
    songName: "Phir bhi tumko chahunga",
    filePath: "./song/6.mp3",
    coverPath: "./covers/6.jpg",
  },
  {
    songName: "Panniyon sa",
    filePath: "./song/7.mp3",
    coverPath: "./covers/7.jpg",
  },
  {
    songName: "tum merre ho is pal mere ho",
    filePath: "./song/8.mp3",
    coverPath: "./covers/8.jpg",
  },
  {
    songName: "Feelings",
    filePath: "./song/9.mp3",
    coverPath: "./covers/9.jpg",
  },
  {
    songName: "tu hi rab tu hi dua",
    filePath: "./song/10.mp3",
    coverPath: "./covers/9.jpg",
  },
];

songItems.forEach((element, i) => {
  // console.log(element, i);
  //set cover and name
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle pause/play event
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
      masterSongName.innerText = songs[songIndex].songName;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

//listen to events
audioElement.addEventListener("timeupdate", () => {
  //   console.log("timeupdate");
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressBar.value = progress;
});

myprogressBar.addEventListener("click", () => {
  audioElement.currentTime =
    (myprogressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log(e);
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `./song/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./song/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./song/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();

  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
