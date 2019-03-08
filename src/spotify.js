import { useState, useEffect } from 'react';
import Spotify from 'spotify-web-api-js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// One day handle refresh tokens
export const useSpotifyApi = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [spotify, setSpotify] = useState(null);
	const spotifyApi = new Spotify();

	useEffect(() => {
		const accessToken = cookies.get('access_token');
		const params = getHashParams(window.location.hash);
		if (accessToken) {
			spotifyApi.setAccessToken(accessToken);
			setLoggedIn(true);
			setSpotify(spotifyApi);
		} else if (params.access_token) {
			cookies.set('access_token', params.access_token, {
				path: '/',
				maxAge: 3600,
			});
			cookies.set('refresh_token', params.refresh_token, { path: '/' });
			spotifyApi.setAccessToken(params.access_token);
			setLoggedIn(true);
			setSpotify(spotifyApi);
			window.location.hash = ''; // Reset URL hash
		}
	}, []);
	return [loggedIn, spotify];
};

const getHashParams = (hash) => {
	const hashParams = {};
	var e,
		r = /([^&;=]+)=?([^&;]*)/g,
		q = hash.substring(1);
	while ((e = r.exec(q))) {
		hashParams[e[1]] = decodeURIComponent(e[2]);
	}
	return hashParams;
};
