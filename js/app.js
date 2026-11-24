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

// ----------------------------------------------- Playlist elements.
const sidebar = document.querySelector(".sidebar");
const userPlaylists = document.querySelector(".sidebar__user-playlists");
const playlistInput = document.querySelector(".sidebar__add-playlist__input");
const playlistButton = document.querySelector(".sidebar__add-playlist__img");
const renderAllSongs = document.querySelector(".sidebar__all-songs");
const myPlaylist = document.querySelector(".sidebar__myPlaylist__button");
const addToMyPlaylist = document.querySelector(".song-addPlaylist");
const myPlaylistLength = document.querySelector(".sidebar__myPlaylist__length");
const myPlaylistDuration = document.querySelector(
  ".sidebar__myPlaylist__duration",
);

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

// ------------------------------------ Categories and search

// selecting the elements

const titleButton = document.querySelector(".category-title");
const artistButton = document.querySelector(".category-artist");
const genreButton = document.querySelector(".category-genre");
const durationButton = document.querySelector(".category-duration");
const songList = document.querySelector(".main-content__song-list");
const genreFilter = document.querySelector(".genreFilter");
const searchInput = document.querySelector(".search__input");
const searchButton = document.querySelector(".search__button");

// Formating searchInput
// let searchTerm = searchInput.value.trim();
// searchTerm = searchTerm.toLowerCase();

// Registering click

let selectedCategory = 0;

titleButton.addEventListener("click", () => {
  if (selectedCategory == 1) {
    selectedCategory = 0;
  } else if (selectedCategory !== 1) {
    selectedCategory = 1;
  }
  refreshCategory();
});
artistButton.addEventListener("click", () => {
  if (selectedCategory == 2) {
    selectedCategory = 0;
  } else if (selectedCategory !== 2) {
    selectedCategory = 2;
  }
  refreshCategory();
});
genreButton.addEventListener("click", () => {
  if (selectedCategory == 3) {
    selectedCategory = 0;
  } else if (selectedCategory !== 3) {
    selectedCategory = 3;
  }
  refreshCategory();
});
durationButton.addEventListener("click", () => {
  if (selectedCategory == 4) {
    selectedCategory = 0;
  } else if (selectedCategory !== 4) {
    selectedCategory = 4;
  }
  refreshCategory();
});

// Adding and removing the active class

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

// variable containing the songs to "My playlist"
let myPlaylistContent = [];
console.log(
  "My playlist contains these songs ",
  JSON.parse(localStorage.getItem("myPlaylistContent")),
);

if (JSON.parse(localStorage.getItem("myPlaylistContent")).length !== 0) {
  myPlaylistContent = JSON.parse(localStorage.getItem("myPlaylistContent"));
}

// Rendering the stats for "my Playlist" under the my playlist button
const renderPlaylistStats = () => {
  // Display length
  myPlaylistLength.textContent = `Songs: ${myPlaylistContent.length}`;
  // Calculate duration
  var myPlaylistContentDuration = 0;
  myPlaylistContent.forEach((song) => {
    myPlaylistContentDuration = myPlaylistContentDuration + song.duration;
  });
  myPlaylistContentDuration = Math.trunc(myPlaylistContentDuration / 60);
  console.log(myPlaylistContentDuration);

  // Display duration
  myPlaylistDuration.textContent = `Duration: ${myPlaylistContentDuration}min`;
};
renderPlaylistStats();

// --------------------------------------- Rendering the songs in the songs list
if (songs) {
  // Playlist variables
  let renderMyPlaylist = false;
  // Start rendering the song list
  const renderSongList = (item) => {
    //Clearing the song list
    songList.innerHTML = "";
    //Display message if song array is empty
    if (item.length !== 0) {
      item.forEach((song, index) => {
        // Creating elements
        const songCard = document.createElement("li");
        const songTitle = document.createElement("p");
        const songArtist = document.createElement("p");
        const songGenre = document.createElement("p");
        const songDuration = document.createElement("p");
        const addToMyPlaylist = document.createElement("img");
        // Adding text to the elements.
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        songGenre.textContent = song.genre;
        songDuration.textContent = `${song.duration} sec`;
        // Changing the icon for adding or removing songs
        if (renderMyPlaylist == true) {
          addToMyPlaylist.setAttribute("src", "./assets/icons/remove.svg");
        } else {
          addToMyPlaylist.setAttribute("src", "./assets/icons/add.svg");
        }
        // Adding class names to elements
        songCard.classList.add("song");
        songTitle.classList.add("song-title");
        songArtist.classList.add("song-artist");
        songGenre.classList.add("song-genre");
        songDuration.classList.add("song-duration");
        addToMyPlaylist.classList.add("song-addPlaylist");
        // Appending the elements
        songList.append(songCard);
        songCard.append(
          songTitle,
          songArtist,
          songGenre,
          songDuration,
          addToMyPlaylist,
        );
        // Adding the event listeners
        songCard.addEventListener("dblclick", () => {
          songTitleAndArtist.textContent = `${song.title} by ${song.artist}`;
        });
        //Adding and removing songs from "my playlist"
        // Are we currently displaying "my playlist"?
        if (renderMyPlaylist == true) {
          addToMyPlaylist.addEventListener("click", () => {
            console.log("removing from playlist");
            console.log(song.title, "at index nr ", index);
            // Removing the song from the myPlaylistContent array
            myPlaylistContent.splice(index, 1);
            // Saving the myPlaylistContent array locally
            localStorage.setItem(
              "myPlaylistContent",
              JSON.stringify(myPlaylistContent),
            );
            console.log(myPlaylistContent);
            // Re-Rendering the song list to display "my playlist" without the song.
            renderSongList(myPlaylistContent);
            // Re-Rendering playlist stats
            renderPlaylistStats();
          });
        } else {
          addToMyPlaylist.addEventListener("click", () => {
            // Checking if the song is already in "my playlist" array
            let isInPlaylist = false;
            const alreadyInPlaylist = myPlaylistContent.forEach(
              (item, index) => {
                if (item.id == song.id) {
                  isInPlaylist = true;
                }
              },
            );
            if (isInPlaylist) {
              //display error message in terminal if the song exists.
              console.log("The song is already in the playlist!!");
            } else {
              console.log("added to playlist");
              // Add song to the myPlaylistContent array
              myPlaylistContent.push(song);
              // Re-Rendering playlist stats
              renderPlaylistStats();
              // Save the myPlaylistContent array locally
              localStorage.setItem(
                "myPlaylistContent",
                JSON.stringify(myPlaylistContent),
              );
            }
          });
        }
      });
    } else if (renderMyPlaylist == true) {
      //Display message if the playlist is empty
      const playlistEmpty = document.createElement("p");
      playlistEmpty.textContent = "The playlist is empty!";
      playlistEmpty.classList.add("song");
      songList.append(playlistEmpty);
    } else {
      //Display message if no song match search
      const noSongsMatchSearch = document.createElement("p");
      noSongsMatchSearch.textContent = "No Songs Found Matching the Search!";
      noSongsMatchSearch.classList.add("song");
      songList.append(noSongsMatchSearch);
    }
  };

  // ---------------------------------------- Sorting the songs

  const applyFilterAndSorting = () => {
    // creating a copy of the songs array
    let filteredItems = [...songs];

    // Changing the content in filteredItems to a copy of the myPlaylistContent array
    if (renderMyPlaylist) {
      filteredItems = [...myPlaylistContent];
    }

    //Filter
    //Sorting out songs that don't match the selected genre
    if (genreFilter.value !== "all") {
      //log genre selected
      filteredItems = filteredItems.filter(
        (item) => item.genre.search(genreFilter.value) !== -1,
      );
    }
    //Search
    //formating the search input value
    let searchTerm = searchInput.value.trim();
    searchTerm = searchTerm.toLowerCase();
    // Is the search input empty?
    if (searchTerm !== "") {
      filteredItems = filteredItems.filter(
        (item) =>
          //Search terms
          item.title.toLowerCase().search(searchTerm) !== -1 ||
          item.artist.toLowerCase().search(searchTerm) !== -1,
      );
      filteredItems = filteredItems;
    }

    //Sort
    switch (selectedCategory) {
      case 1:
        filteredItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 2:
        filteredItems.sort((a, b) => a.artist.localeCompare(b.artist));
        break;
      case 3:
        filteredItems.sort((a, b) => a.genre.localeCompare(b.genre));
        break;
      case 4:
        filteredItems.sort((a, b) => b.duration - a.duration);
        break;
    }
    return filteredItems;
  };

  // Updating the song list with the filter/sort applied
  const updateList = () => {
    applyFilterAndSorting();
    const filteredAndSortedSongs = applyFilterAndSorting();
    renderSongList(filteredAndSortedSongs);
  };

  titleButton.addEventListener("click", updateList);
  artistButton.addEventListener("click", updateList);
  genreButton.addEventListener("click", updateList);
  durationButton.addEventListener("click", updateList);
  genreFilter.addEventListener("change", updateList);
  searchInput.addEventListener("keyup", updateList);
  searchButton.addEventListener("click", updateList);
  updateList();

  //------------------------------------------------------------------------------- Playlist stuff

  // Rendering "my Playlist"
  myPlaylist.addEventListener("click", () => {
    console.log("attempthing to load my playlist");
    renderMyPlaylist = true;
    renderSongList(myPlaylistContent);
  });
  // Rendering all the song from the songs array.
  renderAllSongs.addEventListener("click", () => {
    console.log("Displaying all songs");
    renderMyPlaylist = false;
    updateList();
  });
}

//Updating the song list when a change is detected

// TODO create separate elements for song title and artist.
// Use a loop instead of innerHMTL for creating the categories.

// ------------------------------------------------------------------------------------ Playlists

// Accessing playlist elements.
// const sidebar = document.querySelector(".sidebar");
// const userPlaylists = document.querySelector(".sidebar__user-playlists");
// const playlistInput = document.querySelector(".sidebar__add-playlist__input");
// const playlistButton = document.querySelector(".sidebar__add-playlist__img");
// const myPlaylist = document.querySelector(".sidebar__myPlaylist__button");
// const addToMyPlaylist = document.querySelector(".song-addPlaylist");

// // Playlist variables
// const playlists = [];
// let playlistIndex = 1;

// myPlaylist.addEventListener("click", () => {
//   console.log("added to playlist");
// });

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
      console.log("you clicked the playlist!");
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
