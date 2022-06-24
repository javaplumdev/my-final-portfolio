import React from 'react';
// React router
import { useParams } from 'react-router-dom';
// Data
import { ProjectsData } from '../data/Data';
import { RecentProjects } from '../data/Data';

const ProjectContentPage = () => {
	const { id } = useParams();

	const proj = ProjectsData.filter((item) => item.projectID === parseInt(id));

	console.log(ProjectsData);
	console.log(proj);

	return (
		<div>
			<div className="proj-title bg-white p-3">
				<h1 className="fw-bold">Title</h1>
			</div>
			<div className="proj-img">
				{proj.map((item) => {
					return (
						<img key={item.projectID} src={item.image2} className="w-100" />
					);
				})}
			</div>
		</div>
	);
};

export default ProjectContentPage;
