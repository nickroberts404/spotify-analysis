import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
	${({ src }) =>
		src
			? `background-image: url(${src});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;`
			: 'background: blue;'}
	height: 40px;
	width: 40px;
	border-radius: 50%;
`;

export const Header = ({ loggedIn, user }) => {
	return (
		<div className="header">
			<div className="title">Spotify Analysis</div>
			{loggedIn ? <User user={user} /> : <LoginButton />}
		</div>
	);
};

const User = ({ user }) => {
	if (Object.entries(user).length === 0) return false;
	return (
		<div className="user">
			<div className="name">{user.display_name}</div>
			<Avatar src={user.images[0].url} />
		</div>
	);
};

const LoginButton = () => (
	<a href="http://localhost:8888/login">
		<button>Log In</button>
	</a>
);
