import React from 'react'
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
	return (
		<Container>
			<Section />

			<Section />

			<Section />
		</Container>
	)
}

const Container = styled.div`
	/* width: 100vw; */
	height: 100vh;
`;

export default Home
