import React from 'react';
import { motion } from 'framer-motion';
// Projects data
import { RecentProjects } from '../data/Data.js';
import { ProjectsData } from '../data/Data.js';
// React Router
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div className="projects">
			<div className="mb-5">
				<h1 className="fw-bold">Recent projects</h1>
				<p>Made with love.</p>
			</div>

			{/* Projects */}
			<div>
				<div className="d-flex flex-wrap  justify-content-center ">
					{RecentProjects.map((item) => {
						return (
							<motion.div
								whileHover={{ scale: 1.1 }}
								key={item.projectID}
								className="m-3"
								style={{ maxWidth: '320px' }}
							>
								<Link
									to={`/projectpage/${item.projectID}`}
									className="text-decoration-none"
								>
									<img src={item.image} className="project w-100 " />
									<p>{item.projectName}</p>
								</Link>
							</motion.div>
						);
					})}
				</div>

				<Link to="/projectpage">
					<b className="d-flex justify-content-end">See all</b>
				</Link>
			</div>
		</div>
	);
};

export default Projects;
