import { combineReducers } from 'redux';

const initialState = [
  { title: 'Cancion 1', time: '3:30' },
  { title: 'Cancion 2', time: '4:10' },
  { title: 'Cancion 3', time: '1:20' },
  { title: 'Cancion 4', time: '2:50' },
]

const songsReducer = (state = initialState, action) => {
  return state;
}

const selectedSongReducer = (state = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});

