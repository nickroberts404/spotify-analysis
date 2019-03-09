import React from 'react';
import styled from 'styled-components';
import { TrackItem } from './TrackItem';

const Table = styled.table`
	margin: 1rem;
`;

export const PlaylistTable = ({ tracks }) => {
	return (
		<Table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Artists</th>
					<th>Duration</th>
					<th>Tempo</th>
					<th>Key</th>
				</tr>
			</thead>
			<tbody>
				{tracks.map((t) => (
					<TrackItem track={t.track} />
				))}
			</tbody>
		</Table>
	);
};
