import React from 'react';
// motion
import { motion } from 'framer-motion';
// React Router
import { Link } from 'react-router-dom';
// Context
import { useContext } from 'react';
import { ContextVariable } from '../context/context-config';
import { BsList } from 'react-icons/bs';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
	const { AnimateHeroText } = useContext(ContextVariable);

	return (
		// <motion.div
		// 	variants={AnimateHeroText}
		// 	initial="initial"
		// 	animate="animate"
		// 	className="navbar py-3 justify-content-between d-flex "
		// >

		// </motion.div>

		<Navbar bg="white" expand="lg" className="sticky-top position-sticky">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="text-decoration-none">
						<b>Mecarez Jr.</b>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					{' '}
					<BsList />{' '}
				</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mx-auto">
						<Link
							id="RouterNavLink"
							to="/about"
							className="me-5 text-decoration-none"
						>
							<p>About</p>
						</Link>

						<Link
							id="RouterNavLink"
							to="/projectpage"
							className="me-5 text-decoration-none"
						>
							<p>Projects</p>
						</Link>
					</Nav>
					<Nav>
						<Link
							id="RouterNavLink"
							to="/contacts"
							className="me-5 text-decoration-none"
						>
							<p>Contact</p>
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavbarComponent;
