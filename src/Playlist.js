import React from 'react';
import { useSpotifyPlaylist } from './spotify';
import { Track } from './Track';

export const Playlist = ({ spotify, playlistId }) => {
	const playlist = useSpotifyPlaylist(spotify, playlistId);
	if (!playlist.name) return false;
	console.log(playlist);
	return (
		<div className="playlist">
			<div className="playlist-name">{playlist.name}</div>
			<div className="playlist-tracks">
				{playlist.tracks.items.map(({ track }) => (
					<Track key={track.id} track={track} />
				))}
			</div>
		</div>
	);
};
