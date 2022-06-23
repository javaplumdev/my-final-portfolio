import React from 'react';
// Components
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
// Bootstrap
import { Container } from 'react-bootstrap';

const ContentHolder = () => {
	return (
		<>
			<Container>
				<Navbar />
				<Hero />
				<Projects />
			</Container>
		</>
	);
};

export default ContentHolder;
