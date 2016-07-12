import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import SearchBar from './containers/search_bar';
import ArtistList from './containers/artist_list';
import ArtistAlbum from './containers/artist_album';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={SearchBar} />
    <Route path="artist" component={ArtistList} />
    <Route path="artist/:name" component={ArtistAlbum} />
  </Route>
);
