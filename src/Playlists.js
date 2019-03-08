import React from 'react';
import { useSpotifyUserPlaylists } from './spotify';

export const Playlists = ({ spotify }) => {
	const playlists = useSpotifyUserPlaylists(spotify);
	console.log(playlists);
	return (
		<div className="playlists">
			{(playlists.items || []).map((p) => (
				<div className="playlist-name">
					{p.name}({p.tracks.total})
				</div>
			))}
		</div>
	);
};
