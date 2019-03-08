import React from 'react';
import { Link } from '@reach/router';
import { useSpotifyUserPlaylists } from './spotify';

export const Playlists = ({ spotify }) => {
	const playlists = useSpotifyUserPlaylists(spotify);
	console.log(playlists);
	return (
		<div className="playlists">
			{(playlists.items || []).map((p) => (
				<Link to={`/${p.id}`}>{p.name}</Link>
			))}
		</div>
	);
};
