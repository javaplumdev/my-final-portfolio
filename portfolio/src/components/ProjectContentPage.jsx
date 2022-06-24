import React from 'react';
// React router
import { useParams } from 'react-router-dom';

const ProjectContentPage = () => {
	const { id } = useParams();

	console.log(id);

	return <div>ProjectContentPage</div>;
};

export default ProjectContentPage;
