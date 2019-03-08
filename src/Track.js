import React from 'react';

export const Track = ({ track }) => {
	return (
		<div className="track">
			<div className="track-name">{track.name}</div>
		</div>
	);
};
