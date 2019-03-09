import React from 'react';
import styled from 'styled-components';
import { useSpotifyPlaylist } from './spotify';
import { PlaylistTable } from './PlaylistTable';

const Container = styled.div`
	margin: 1rem;
`;
const Title = styled.h2``;

export const Playlist = ({ spotify, playlistId }) => {
	const playlist = useSpotifyPlaylist(spotify, playlistId);
	if (!playlist.name) return false;
	return (
		<Container>
			<Title>{playlist.name}</Title>
			<PlaylistTable tracks={playlist.tracks.items} />
		</Container>
	);
};
