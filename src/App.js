import React from 'react';
import { useSpotifyApi } from './spotify';
import { Router } from '@reach/router';
import { Header } from './Header';
import { Playlists } from './Playlists';
import { Playlist } from './Playlist';

const App = () => {
	const [loggedIn, user, spotify] = useSpotifyApi();
	return (
		<div className="app">
			<Header loggedIn={loggedIn} user={user} />
			<Playlists spotify={spotify} />
			<Router>
				<Playlist path=":playlistId" spotify={spotify} />
			</Router>
		</div>
	);
};

export default App;
