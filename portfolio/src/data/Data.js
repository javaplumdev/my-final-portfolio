import Group1 from '../assets/Group 1.png';
import Group2 from '../assets/Group 2.png';
import Group3 from '../assets/Group 3.png';
import Group4 from '../assets/Group 4.png';
import Group5 from '../assets/Group 5.png';
import Group6 from '../assets/Group 6.png';
import Group7 from '../assets/Group 7.png';
import Group10 from '../assets/Group 10.png';

import { v4 as uuidv4 } from 'uuid';

export const ProjectsData = [
	{
		projectID: uuidv4(),
		projectName: 'Crush me crush',
		image: Group1,
	},
	{ projectID: uuidv4(), projectName: 'Crush me crush', image: Group2 },
	{ projectID: uuidv4(), projectName: 'Crush me crush', image: Group3 },
	{ projectID: uuidv4(), projectName: 'Crush me crush', image: Group4 },
	{ projectID: uuidv4(), projectName: 'Crush me crush', image: Group5 },
];

export const RecentProjects = [
	{
		projectID: uuidv4(),
		projectName: 'Crush me crush',
		image: Group6,
	},
	{
		projectID: uuidv4(),
		projectName: 'Crush me crush',
		image: Group7,
	},
	{
		projectID: uuidv4(),
		projectName: 'Crush me crush',
		image: Group10,
	},
];
