import React from 'react';
// React Router
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="py-5  justify-content-between d-flex">
			<Link to="/">
				<b>Navbar brand</b>
			</Link>

			<Link to="/projectpage">
				<p>projects</p>
			</Link>

			<p>contacts</p>
		</div>
	);
};

export default Navbar;
