import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	grid-area: header;
	display: flex;
	align-items: center;
`;

const Spacer = styled.div`
	flex-grow: 1;
`;

const UserContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Avatar = styled.div`
	${({ src }) =>
		src
			? `background-image: url(${src});
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;`
			: 'background: blue;'}
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
	margin-left: 2rem;
`;

const Title = styled.h1`
	font-size: 1.5rem;
	color: tomato;
`;

export const Header = ({ loggedIn, user }) => {
	return (
		<Container>
			<Title>Spotify Analysis</Title>
			<Spacer />
			{loggedIn ? <User user={user} /> : <LoginButton />}
		</Container>
	);
};

const User = ({ user }) => {
	if (Object.entries(user).length === 0) return false;
	return (
		<UserContainer>
			<div className="name">{user.display_name}</div>
			<Avatar src={user.images[0].url} />
		</UserContainer>
	);
};

const LoginButton = () => (
	<a href="http://localhost:8888/login">
		<button>Log In</button>
	</a>
);
