import React from 'react';
// React router
import { useParams } from 'react-router-dom';
// Data
import { ProjectsData } from '../data/Data';
import { RecentProjects } from '../data/Data';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
import { BsCodeSlash, BsGlobe2 } from 'react-icons/bs';

const ProjectContentPage = () => {
	const { id } = useParams();

	const proj = ProjectsData.filter((item) => item.projectID === parseInt(id));

	return (
		<div>
			<div>
				<Row>
					<Col md="8">
						{proj.map((item) => {
							return (
								<div key={item.projectID}>
									<img
										src={item.image2}
										className="w-100"
										style={{ borderRadius: '20px' }}
									/>
									<div className="d-flex align-items-center justify-content-between flex-wrap">
										<div>
											<h2 className="fw-bold my-3">{item.projectName}</h2>
											<div className="d-flex flex-wrap my-3">
												{item.tech.map((tech) => {
													return (
														<small
															className="m-1 p-1  rounded"
															style={{ border: '1px solid #00c3ff' }}
														>
															{tech}
														</small>
													);
												})}
											</div>
										</div>
										<div className="d-flex flex-wrap">
											<button className="button m-2">
												<BsCodeSlash size={20} />
												View code
											</button>

											<a href={item.link} target="_blank">
												<button className="button m-2">
													<BsGlobe2 size={20} />
													Live demo
												</button>
											</a>
										</div>
									</div>
								</div>
							);
						})}
					</Col>
					<Col md="4">
						<p>Proj details</p>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default ProjectContentPage;
