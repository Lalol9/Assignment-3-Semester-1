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

// Dont do styling outside of css!!!! Dummy! ;P

// Logic for repeat button

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

// Logic for play/pause button

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

// ------------------------------------ Category buttons

// selecting the buttons

const titleButton = document.querySelector(".category-title");
const artistButton = document.querySelector(".category-artist");
const genreButton = document.querySelector(".category-genre");
const durationButton = document.querySelector(".category-duration");

let selectedCategory = 0;

// event listener
titleButton.addEventListener("click", () => {
  selectedCategory = 1;
  refreshCategory();
});
artistButton.addEventListener("click", () => {
  selectedCategory = 2;
  refreshCategory();
});
genreButton.addEventListener("click", () => {
  selectedCategory = 3;
  refreshCategory();
});
durationButton.addEventListener("click", () => {
  selectedCategory = 4;
  refreshCategory();
});

// Turning on the selected category

const refreshCategory = () => {
  switch (selectedCategory) {
    case 1:
      titleButton.classList.add("category-selected");
      artistButton.classList.remove("category-selected");
      genreButton.classList.remove("category-selected");
      durationButton.classList.remove("category-selected");
      break;
    case 2:
      titleButton.classList.remove("category-selected");
      artistButton.classList.add("category-selected");
      genreButton.classList.remove("category-selected");
      durationButton.classList.remove("category-selected");
      break;
    case 3:
      titleButton.classList.remove("category-selected");
      artistButton.classList.remove("category-selected");
      genreButton.classList.add("category-selected");
      durationButton.classList.remove("category-selected");
      break;
    case 4:
      titleButton.classList.remove("category-selected");
      artistButton.classList.remove("category-selected");
      genreButton.classList.remove("category-selected");
      durationButton.classList.add("category-selected");
      break;
    default:
      titleButton.classList.remove("category-selected");
      artistButton.classList.remove("category-selected");
      genreButton.classList.remove("category-selected");
      durationButton.classList.remove("category-selected");
      break;
  }
};

// ---------------------------------------- Sorting the songs

const applyFilterAndSorting = () => {
  //filter
  let filteredItems = [...songs];
};

//Accessing the elements related to the song list.
const songList = document.querySelector(".main-content__song-list");

// --------------------------------------- Rendering the songs in the songs list
const songsRender = () => {
  songs.forEach((song, index) => {
    // Creating elements
    const songCard = document.createElement("li");
    const songTitle = document.createElement("p");
    const songArtist = document.createElement("p");
    const songGenre = document.createElement("p");
    const songDuration = document.createElement("p");
    // Adding text to the elements.
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songGenre.textContent = song.genre;
    songDuration.textContent = `${song.duration} sec`;
    // Adding class names to elements
    songCard.classList.add("song");
    songTitle.classList.add("song-title");
    songArtist.classList.add("song-artist");
    songGenre.classList.add("song-genre");
    songDuration.classList.add("song-duration");
    // Appending the elements
    songList.append(songCard);
    songCard.append(songTitle, songArtist, songGenre, songDuration);
    // Adding the event listeners
    songCard.addEventListener("dblclick", () => {
      songTitleAndArtist.textContent = `${song.title} by ${song.artist}`;
    });
  });
};

// TODO create separate elements for song title and artist.
// Use p instead of div's
// Use a loop instead of innerHMTL for creating the categories.

songsRender();

// ------------------------------------------------------------------------------------ Playlists

// Accessing playlist elements.
const sidebar = document.querySelector(".sidebar");
const userPlaylists = document.querySelector(".sidebar__user-playlists");
const playlistInput = document.querySelector(".sidebar__add-playlist__input");
const playlistButton = document.querySelector(".sidebar__add-playlist__img");
const likedSongs = document.querySelector(".sidebar__liked");

// Playlist variables
const playlists = [];
let playlistIndex = 0;

// Rendering playlists in the sidebar
const renderPlaylist = () => {
  // if (userPlaylists != "") {
  //   userPlaylists.innerHTML = "";
  // }
  userPlaylists.innerHTML = "";
  playlists.forEach((playlistName, index) => {
    const playlist = document.createElement("li");
    playlist.textContent = playlists[index];
    playlist.classList.add("playlist-button");
    userPlaylists.append(playlist);
    playlist.addEventListener("dblclick", () => {
      console.log();
    });
  });
};

// Creating new playlists.

playlistButton.addEventListener("click", () => {
  if (playlistInput.value !== "") {
    playlists[playlistIndex] = playlistInput.value;
    playlistIndex = playlistIndex + 1;
  } else {
    console.log("Please give the playlist a name!");
  }
  console.log(playlists);
  renderPlaylist();
});
