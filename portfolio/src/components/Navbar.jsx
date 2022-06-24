import React from 'react';
// motion
import { motion } from 'framer-motion';
// React Router
import { Link } from 'react-router-dom';
// Context
import { useContext } from 'react';
import { ContextVariable } from '../context/context-config';

const Navbar = () => {
	const { AnimateHeroText } = useContext(ContextVariable);

	return (
		<motion.div
			variants={AnimateHeroText}
			initial="initial"
			animate="animate"
			className="py-5 justify-content-between d-flex"
		>
			<Link to="/">
				<b>Navbar brand</b>
			</Link>

			<Link to="/projectpage">
				<p>projects</p>
			</Link>

			<p>contacts</p>
		</motion.div>
	);
};

export default Navbar;
