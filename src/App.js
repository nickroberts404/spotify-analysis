import React from 'react';
import styled from 'styled-components';
import { useSpotifyApi } from './spotify';
import { Router } from '@reach/router';
import { Header } from './Header';
import { Playlists } from './Playlists';
import { Playlist } from './Playlist';

const Container = styled.div`
	display: grid;
	grid-template-columns: 150px auto;
	grid-template-rows: 3rem auto;
	grid-template-areas:
		'header header'
		'sidebar content';
	font-family: Avenir;
`;

const Content = styled.div`
	grid-area: content;
`;

const App = () => {
	const [loggedIn, user, spotify] = useSpotifyApi();
	return (
		<Container>
			<Header loggedIn={loggedIn} user={user} />
			<Playlists spotify={spotify} />
			<Content>
				<Router primary={false}>
					<Playlist path=":playlistId" spotify={spotify} />
				</Router>
			</Content>
		</Container>
	);
};

export default App;
