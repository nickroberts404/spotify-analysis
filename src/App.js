import React from 'react';
import { useSpotifyApi } from './spotify';
import { Header } from './Header';
import { Playlists } from './Playlists';
const App = () => {
	const [loggedIn, user, spotify] = useSpotifyApi();
	return (
		<div className="app">
			<Header loggedIn={loggedIn} user={user} />
			<Playlists spotify={spotify} />
		</div>
	);
};

export default App;
