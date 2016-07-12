import { combineReducers } from 'redux';
import ArtistReducer from './reducer_artist';
import AlbumReducer from './reducer_album';

const rootReducer = combineReducers({
  artist: ArtistReducer,
  album: AlbumReducer
});

export default rootReducer;
