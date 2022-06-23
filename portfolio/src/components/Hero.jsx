import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';

const Hero = () => {
	return (
		<>
			<div className="hero-page">
				<h1 className="display-4 fw-bold text-center ">
					Brings performance <span>experience</span> and modern looking{' '}
					<span>user interfaces </span>
				</h1>
				<button className="button my-5 mb-5">Send a message</button>

				<div className="d-flex align-items-center">
					<p className="me-3">Scroll down</p>
					<motion.div
						className="scroll-down"
						animate={{ y: [-20, 0] }}
						transition={{
							duration: 1,
							repeat: Infinity,
							repeatType: 'reverse',
						}}
					></motion.div>
				</div>
			</div>
			{/* animation */}
			<motion.div
				className="circle"
				animate={{ x: [0, 30, -50, 0], y: [0, 30, -50, 0] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			></motion.div>
		</>
	);
};

export default Hero;
