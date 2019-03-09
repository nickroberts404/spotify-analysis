import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';
import { useSpotifyUserPlaylists } from './spotify';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	grid-area: sidebar;
	background: papayawhip;
	padding: 0.2rem 0;
`;

const StyledLink = styled(Link)`
	color: #333;
	text-decoration: none;
	font-size: 0.9rem;
	padding: 0.2rem 0.5rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	&:hover {
		font-weight: bold;
	}
`;

const isActive = ({ isCurrent }) => {
	return isCurrent ? { style: { fontWeight: 'bold' } } : null;
};
export const Playlists = ({ spotify }) => {
	const playlists = useSpotifyUserPlaylists(spotify);
	console.log(playlists);
	return (
		<Container>
			{(playlists.items || []).map((p) => (
				<StyledLink getProps={isActive} to={`/${p.id}`}>
					{p.name}
				</StyledLink>
			))}
		</Container>
	);
};
