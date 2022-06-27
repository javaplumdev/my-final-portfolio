import React from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
import { ContextVariable } from '../context/context-config';
import PatternPad from '../assets/patternpad.png';

const Hero = () => {
	const { AnimateHeroText } = useContext(ContextVariable);

	return (
		<>
			<motion.div
				variants={AnimateHeroText}
				initial="initial"
				animate="animate"
				className="hero-page"
			>
				<h1 className="display-4 fw-bold text-center ">
					Brings performance <span>experience</span> and nice looking{' '}
					<span>user interfaces</span>.
				</h1>
				{/* <button className="button my-5">Send a message</button> */}

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
			</motion.div>

			<motion.div
				className="circle"
				animate={{ x: [0, 30, -50, 0], y: [0, 30, -50, 0] }}
				transition={{
					duration: 5,
					repeat: Infinity,
					repeatType: 'reverse',
				}}
			></motion.div>
			<img src={PatternPad} className="patternpad w-100" />
		</>
	);
};

export default Hero;
