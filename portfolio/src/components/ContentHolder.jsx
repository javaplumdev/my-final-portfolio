import React from 'react';
// Components
import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Blog from './Blog';
// Bootstrap
import { Container } from 'react-bootstrap';

const ContentHolder = () => {
	return (
		<>
			<Container>
				<Navbar />
				<Hero />
				<Projects />
				<Blog />
			</Container>
		</>
	);
};

export default ContentHolder;
