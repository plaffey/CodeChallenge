import axios from 'axios';

export const FETCH_ARTIST = 'FETCH_ARTIST';
export const FETCH_ALBUM = 'FETCH_ALBUM';

const API_KEY = 'db2a35f6d89bda61e74ed8399377fb71';
const ROOT_URL = `http://ws.audioscrobbler.com/2.0/?format=json&api_key=${API_KEY}`;

export function fetchArtist(artist) {
  const method = 'artist.search';
  const url = `${ROOT_URL}&method=${method}&artist=${artist}`;
  const request = axios.get(url);

  return {
    type: FETCH_ARTIST,
    payload: request
  };
}

export function fetchAlbum(artist) {
  const method = 'artist.gettopalbums';
  const url = `${ROOT_URL}&method=${method}&artist=${artist}`;
  const request = axios.get(url);

  return {
    type: FETCH_ALBUM,
    payload: request
  };
}
