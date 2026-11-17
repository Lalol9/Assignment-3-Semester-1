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
const songTitleAndArtist = document.querySelector(".footer__song-and-artist");

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
    shuffle.classList.add("playback-button-active");
  } else {
    shuffle.classList.remove("playback-button-active");
  }
});

// TODO make an 'active class' to inicate that the buttons are on and off.
// Dont do styling outside of css!!!! Dummy! ;P

repeat.addEventListener("click", () => {
  repeatOn = repeatOn + 1;
  if (repeatOn > 1) {
    repeatOn = 0;
  }
  console.log(repeatOn);
  if (repeatOn === 1) {
    repeat.classList.add("playback-button-active");
  } else {
    repeat.classList.remove("playback-button-active");
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

// ---------------------------------------- Sorting the songs
let sortedSongList = JSON.parse(JSON.stringify(songs));

console.log(sortedSongList);

//Accessing the elements related to the song list.
const songList = document.querySelector(".main-content__song-list");

// --------------------------------------- Rendering the songs in the songs list
const songsTest = () => {
  sortedSongList.forEach((song, index) => {
    // Creating elements
    const songCard = document.createElement("li");
    const songNumber = document.createElement("p");
    const songTitle = document.createElement("p");
    const songArtist = document.createElement("p");
    const songGenre = document.createElement("p");
    const songDuration = document.createElement("p");
    // Adding text to the elements.
    songNumber.textContent = index + 1;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songGenre.textContent = song.genre;
    songDuration.textContent = song.duration;
    // Adding class names to elements
    songCard.classList.add("song");
    songNumber.classList.add("song-number");
    songTitle.classList.add("song-title");
    songArtist.classList.add("song-artist");
    songGenre.classList.add("song-genre");
    songDuration.classList.add("song-duration");
    // Appending the elements
    songList.append(songCard);
    songCard.append(songNumber, songTitle, songArtist, songGenre, songDuration);
    // Adding the event listeners
    songCard.addEventListener("dblclick", () => {
      songTitleAndArtist.textContent = `${song.title} by ${song.artist}`;
    });
  });
};

// TODO create separate elements for song title and artist.
// Use p instead of div's
// Use a loop instead of innerHMTL for creating the categories.
// Make the song list a ul.

songsTest();

//-------------------------------------------------- Accessing elements needed to select a song

// const spesificSong = document.querySelector(".song");

// ------------------------------------------------- Logic for selecting a song from the song list
// spesificSong.addEventListener("click", () => {
//   currentSong = spesificSong.number;
//   console.log("you clicked a song");
// });

// Questions for reza
// How can i make the song list clickable?
// Good way to select songs?
// How can I make the song list not selectable?
// Is this a sane way to do things?
// How can I make the hover effect work on the shuffle and loop buttons?
//
//
//
