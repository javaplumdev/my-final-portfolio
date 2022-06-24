import React from 'react';
// React router
import { useParams } from 'react-router-dom';
// Data
import { ProjectsData } from '../data/Data';
import { RecentProjects } from '../data/Data';
// Bootstrap
import { Row, Col } from 'react-bootstrap';

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
								<div>
									<div>
										<img
											key={item.projectID}
											src={item.image2}
											className="w-100"
										/>
										<h4 className="fw-bold mt-3">{item.projectName}</h4>
									</div>
								</div>
							);
						})}
					</Col>
					<Col md="4">
						<p className="bg-danger">Hi</p>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default ProjectContentPage;
