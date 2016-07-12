import { FETCH_ARTIST } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_ARTIST:
    return [ action.payload.data, ...state];
  }

  return state;
}
