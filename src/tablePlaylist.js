import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export const PlaylistTable = ({ tracks }) => {
	const columns = [
		{ Header: 'Title', accessor: 'track.name' },
		{
			id: 'artists',
			Header: 'Artists',
			accessor: (t) => t.track.artists.map((a) => a.name).join(', '),
		},
		{
			id: 'duration',
			Header: 'Duration',
			accessor: (t) => msToTime(t.track.duration_ms),
		},
		{
			id: 'tempo',
			Header: 'Tempo',
			accessor: (t) => Math.round(t.track.tempo),
		},
		{
			id: 'key',
			Header: 'Key',
			accessor: (t) => pitchClass[t.track.key] + scale[t.track.mode],
		},
	];
	return (
		<ReactTable
			data={tracks}
			columns={columns}
			defaultPageSize={100}
			minRows={10}
			showPagination={tracks.length > 100}
		/>
	);
};

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
