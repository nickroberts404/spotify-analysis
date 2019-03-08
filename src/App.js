import React from 'react';
import { useSpotifyApi } from './spotify';

const App = () => {
	const [loggedIn, spotify] = useSpotifyApi();
	if (spotify) {
		console.log('we have a spotify!');
		spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
			function(data) {
				console.log('Artist albums:', data);
			},
			function(err) {
				console.error(err);
			}
		);
	}
	return (
		<div className="app">
			{loggedIn ? (
				<div>Logged in!</div>
			) : (
				<a href="http://localhost:8888/login">
					<button>Log In</button>
				</a>
			)}
		</div>
	);
};

export default App;
