import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
	font-size: 0.8rem;
`;
const Name = styled.td`
	margin-right: 1rem;
`;
const Artists = styled.td``;
const Duration = styled.td``;
const BPM = styled.td``;
const Key = styled.td``;
const msToTime = (ms) => {
	const minutes = ms / 1000 / 60;
	const seconds = parseInt(60 * (minutes % 1));
	return parseInt(minutes) + ':' + (seconds < 10 ? '0' : '') + seconds;
};
export const TrackItem = ({ track }) => {
	console.log(track);
	return (
		<Row>
			<Name>{track.name}</Name>
			<Artists>{track.artists.map((a) => a.name).join(', ')}</Artists>
			<Duration>{msToTime(track.duration_ms)}</Duration>
			<BPM>{track.name}</BPM>
			<Key>{track.name}</Key>
		</Row>
	);
};
