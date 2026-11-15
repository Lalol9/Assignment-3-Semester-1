//Variables for logic
let currentSong = 0;
let playingOrPaused = 0;
let shuffleOn = 0;
let repeatOn = 0;

// ------------------------------------------------ Accessing the elements on the page
const shuffle = document.querySelector(".playback-controls__random");
const repeat = document.querySelector(".playback-controls__loop");
const arrowLeft = document.querySelector(".playback-controls__previous-song");
const playPause = document.querySelector(".playback-controls__play-pause");
const arrowRight = document.querySelector(".playback-controls__next-song");
const imageCounter = document.querySelector(".footer__song-and-artist");
const playPauseIcon = document.querySelector(".play-pause-icon");

// ------------------------------------------------- Logic for previous and next buttons
arrowLeft.addEventListener("click", () => {
  currentSong = currentSong - 1;
  if (currentSong < 1) {
    currentSong = 10;
  }
  imageCounter.textContent = `${currentSong}/10`;
  //   console.log(currentSong);
});

arrowRight.addEventListener("click", () => {
  currentSong = currentSong + 1;
  if (currentSong > 10) {
    currentSong = 1;
  }
  imageCounter.textContent = `${currentSong}/10`;
  //   console.log(currentSong);
});

// ---------------------------------------------- logic for play/pause, repeat, and shuffle buttons
shuffle.addEventListener("click", () => {
  shuffleOn = shuffleOn + 1;
  if (shuffleOn > 1) {
    shuffleOn = 0;
  }
  console.log(shuffleOn);
  if (shuffleOn === 1) {
    shuffle.style.backgroundColor = "var(--color-button-hover)";
  } else {
    shuffle.style.backgroundColor = "var(--color-button)";
  }
});

repeat.addEventListener("click", () => {
  repeatOn = repeatOn + 1;
  if (repeatOn > 1) {
    repeatOn = 0;
  }
  console.log(repeatOn);
  if (repeatOn === 1) {
    repeat.style.backgroundColor = "var(--color-button-hover)";
  } else {
    repeat.style.backgroundColor = "var(--color-button)";
  }
});

playPause.addEventListener("click", () => {
  playingOrPaused = playingOrPaused + 1;
  if (playingOrPaused > 1) {
    playingOrPaused = 0;
  }
  console.log(playingOrPaused);
  if (playingOrPaused === 1) {
    playPause.innerHTML =
      "<img class=playback-controls__icon play-pause-icon src=./assets/icons/pause.svg alt=Play/Pause />";
  } else {
    playPause.innerHTML =
      "<img class=playback-controls__icon play-pause-icon src=./assets/icons/play_arrow.svg alt=Play/Pause />";
  }
});

// ---------------------------------------- Loading array from songs.js
console.log(songs);
console.log(songs.length);

//Accessing the elements related to the song list.
const songList = document.querySelector(".main-content__song-list");

// --------------------------------------- Rendering the songs in the songs list
const songsTest = () => {
  let i = 1;
  songs.forEach((song) => {
    const songCard = document.createElement("div");
    songCard.className = "song" + " " + i;
    i = i + 1;

    songCard.innerHTML = `${"<div class=song-number>"} ${song.id} ${"</div>"} 
    ${"<div class=song-title>"} ${song.title} ${"</div>"} 
    ${"<div class=song-artist>"} ${song.artist} ${"</div>"} 
    ${"<div class=song-genre>"} ${song.genre} ${"</div>"} 
    ${"<div class=song-duration>"} ${song.duration} ${"</div>"}`;
    songList.append(songCard);
  });
};

songsTest();

//-------------------------------------------------- Accessing elements needed to select a song

const spesificSong = document.querySelector(".song");

// ------------------------------------------------- Logic for selecting a song from the song list
spesificSong.addEventListener("click", () => {
  currentSong = spesificSong.number;
  console.log("you clicked a song");
});
