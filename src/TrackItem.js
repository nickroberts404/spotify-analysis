import React from 'react';
import styled from 'styled-components';

export const TrackItem = ({ track }) => {
	return (
		<Row>
			<Name>{track.name}</Name>
			<Artists>{track.artists.map((a) => a.name).join(', ')}</Artists>
			<Duration>{msToTime(track.duration_ms)}</Duration>
			<BPM>{Math.round(track.tempo)}</BPM>
			<Key>
				{pitchClass[track.key]}
				{scale[track.mode]}
			</Key>
		</Row>
	);
};

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

const scale = ['m', ''];

const pitchClass = [
	'C',
	'C#',
	'D',
	'D#',
	'E',
	'F',
	'F#',
	'G',
	'G#',
	'A',
	'A#',
	'B',
];
