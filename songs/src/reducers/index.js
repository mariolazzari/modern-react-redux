import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song one", duration: "4:11" },
    { title: "Song two", duration: "3:45" },
    { title: "Song three", duration: "5:22" },
    { title: "Song four", duration: "2:59" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
