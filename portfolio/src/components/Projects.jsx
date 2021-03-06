import React, { useContext } from 'react';
import { motion } from 'framer-motion';
// Projects data
import { RecentProjects } from '../data/Data.js';
import { ProjectsData } from '../data/Data.js';
// React Router
import { Link } from 'react-router-dom';

const Projects = () => {
	return (
		<div className="projects">
			<div className="mb-3 d-flex align-items-center justify-content-between">
				<div>
					<h1 className="fw-bold">Recent projects</h1>
					<p>Made with love.</p>
				</div>

				<Link to="/projectpage" className="text-decoration-none">
					<b className="p-2 see-all d-flex justify-content-end">See all</b>
				</Link>
			</div>

			{/* Projects */}

			<div>
				<motion.div className="d-flex flex-wrap  justify-content-center ">
					{RecentProjects.map((item) => {
						return (
							<motion.div
								whileHover={{ scale: 1.1 }}
								whileInView="visible"
								initial="hidden"
								viewport={{ once: true }}
								transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2 }}
								variants={{
									visible: {
										opacity: 1,
										y: 0,
									},
									hidden: { opacity: 0, y: -100 },
								}}
								key={item.projectID}
								className="m-3 border p-4"
								style={{ maxWidth: '320px' }}
							>
								<Link
									to={`/projectpage/${item.projectID}`}
									className="text-decoration-none"
								>
									<img src={item.image} className="project w-100 " />
									<p>{item.projectName}</p>
									<div className="d-flex flex-wrap">
										{item.tech.map((tech) => {
											return (
												<small
													key={item.projectID}
													className="m-1 p-1 text-white rounded"
													style={{ backgroundColor: '#00c3ff' }}
												>
													{tech}
												</small>
											);
										})}
									</div>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
};

export default Projects;
