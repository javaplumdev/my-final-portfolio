import React from 'react';
import { motion } from 'framer-motion';
// Projects data
import { RecentProjects } from '../data/Data.js';
import { ProjectsData } from '../data/Data.js';
import { Row, Col } from 'react-bootstrap';

const Projects = () => {
	return (
		<div className="projects">
			<div className="mb-5">
				<h1 className="fw-bold">Recent projects</h1>
				<p>Made with love.</p>
			</div>

			{/* Projects */}
			<div>
				<div className="d-flex flex-wrap p-2 justify-content-center">
					{RecentProjects.map((item) => {
						return (
							<motion.div
								whileHover={{ scale: 1.1 }}
								key={item.projectID}
								className="m-3"
							>
								<img src={item.image} className="project" />
								<p>{item.projectName}</p>
							</motion.div>
						);
					})}
				</div>

				<b className="d-flex justify-content-end">See all</b>
			</div>
		</div>
	);
};

export default Projects;
