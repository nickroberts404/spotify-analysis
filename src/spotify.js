import { useState, useEffect } from 'react';
import Spotify from 'spotify-web-api-js';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// One day handle refresh tokens
export const useSpotifyApi = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [spotify, setSpotify] = useState(null);
	const user = useSpotifyUser(spotify);
	const spotifyApi = new Spotify();

	useEffect(() => {
		const accessToken = cookies.get('access_token');
		const params = getHashParams(window.location.hash);
		if (accessToken) {
			spotifyApi.setAccessToken(accessToken);
			setLoggedIn(true);
			setSpotify(spotifyApi);
		} else if (params.access_token) {
			window.location.hash = ''; // Reset URL hash
			cookies.set('access_token', params.access_token, {
				path: '/',
				maxAge: 3600,
			});
			cookies.set('refresh_token', params.refresh_token, { path: '/' });
			spotifyApi.setAccessToken(params.access_token);
			setLoggedIn(true);
			setSpotify(spotifyApi);
		}
	}, []);
	return [loggedIn, user, spotify];
};

export const useSpotifyUser = (spotify, userId) => {
	const [user, setUser] = useState({});
	useEffect(() => {
		if (spotify && userId) {
			spotify.getUser(userId).then((data) => setUser(data));
		} else if (spotify) {
			spotify.getMe().then((data) => setUser(data));
		}
	}, [spotify, userId]);
	return user;
};

export const useSpotifyUserPlaylists = (spotify, userId = null) => {
	const [playlists, setPlaylists] = useState({});
	useEffect(() => {
		if (spotify) {
			spotify.getUserPlaylists(userId).then((data) => setPlaylists(data));
		}
	}, [spotify, userId]);
	return playlists;
};

export const useSpotifyPlaylist = (spotify, playlistId) => {
	const [playlist, setPlaylist] = useState({});
	useEffect(() => {
		if (spotify && playlistId) {
			spotify.getPlaylist(playlistId).then((data) => setPlaylist(data));
		}
	}, [spotify, playlistId]);
	return playlist;
};

export const useSpotifyPlaylistWithAnalysis = (spotify, playlistId) => {
	const playlist = useSpotifyPlaylist(spotify, playlistId);
	const [improvedPlaylist, setImprovedPlaylist] = useState({});
	useEffect(() => {
		if (spotify && playlist.tracks) {
			const ids = playlist.tracks.items.map((i) => i.track.id);
			spotify.getAudioFeaturesForTracks(ids).then((data) => {
				const newTracks = playlist.tracks.items.map((item, i) => ({
					...item,
					track: { ...item.track, ...data.audio_features[i] },
				}));
				setImprovedPlaylist({
					...playlist,
					tracks: { ...playlist.tracks, items: newTracks },
				});
			});
		}
	}, [spotify, playlist]);
	return improvedPlaylist;
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
