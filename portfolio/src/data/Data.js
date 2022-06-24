import Group1 from '../assets/Group 1.png';
import Group2 from '../assets/Group 2.png';
import Group3 from '../assets/Group 3.png';
import Group4 from '../assets/Group 4.png';
import Group5 from '../assets/Group 5.png';
import Group6 from '../assets/Group 6.png';
import Group7 from '../assets/Group 7.png';
import Group8 from '../assets/Group 8.png';
import Group9 from '../assets/Group 9.png';
import Group10 from '../assets/Group 10.png';
import yesIknowU from '../assets/yesi know you.png';

import freedomwall from '../assets/freedomwall desktop.PNG';
import movieapp from '../assets/movie app desktop.PNG';
import ecommerce from '../assets/e commerce desktop.PNG';
import covid from '../assets/covid desktop.PNG';
import spendmoney from '../assets/spend money desktop.PNG';
import pokedex from '../assets/pokedex desktop.PNG';
import musictap from '../assets/music tap desktop.PNG';
import foodapp from '../assets/food app desktop.PNG';
import areubored from '../assets/are u bored desktop.PNG';
import crushme from '../assets/crush me desktop.PNG';
import detailsGenerator from '../assets/details generator desktop.PNG';

import { v4 as uuidv4 } from 'uuid';

export const ProjectsData = [
	{
		projectID: 1,
		projectName: 'Crush me crush',
		image: Group7,
		image2: freedomwall,
	},
	{
		projectID: 2,
		projectName: 'Crush me crush',
		image: Group6,
		image2: movieapp,
	},
	{
		projectID: 3,
		projectName: 'Crush me crush',
		image: Group10,
		image2: ecommerce,
	},
	{
		projectID: 4,
		projectName: 'Crush me crush',
		image: Group2,
		image2: covid,
	},
	{
		projectID: 5,
		projectName: 'Crush me crush',
		image: Group3,
		image2: spendmoney,
	},
	{
		projectID: 6,
		projectName: 'Crush me crush',
		image: Group4,
		image2: pokedex,
	},
	{
		projectID: 7,
		projectName: 'Crush me crush',
		image: Group5,
		image2: musictap,
	},
	{
		projectID: 8,
		projectName: 'Crush me crush',
		image: Group8,
		image2: foodapp,
	},
	{
		projectID: 9,
		projectName: 'Crush me crush',
		image: Group9,
		image2: areubored,
	},

	{
		projectID: 11,
		projectName: 'Crush me crush',
		image: Group1,
		image2: crushme,
	},
	{
		projectID: 12,
		projectName: 'Yes I know u',
		image: yesIknowU,
		image2: detailsGenerator,
	},
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

export const VlogData = [
	{
		vlogID: uuidv4(),
		vlogTitle: 'My journey as a third-year BSIT student (3/18/2022)',
		content:
			'Hi! I’m new to this medium platform and I have no idea what should I do so here’s my story please bare with me. My journey has been tough for me. There are a lot of things that I need to learn. As of now, I’m currently learning web designing and manipulating APIs. I’m struggling with whether should I take track of web designing or be a web developer. I love both of them. So while we were doing our capstone research, I made the designs of our project as well the frontend UI and its functionalities. It took me weeks up until now. I’m looking for ways to make my code more readable.',
		link: 'https://medium.com/@carenzdelarosa/things-ive-learn-so-far-as-a-third-year-it-student-578e1af0074e',
	},
	{
		vlogID: uuidv4(),
		vlogTitle: 'Things I’ve learn so far as a third-year IT student.',
		content:
			'All of the pieces of information and knowledge I learned are pretty far from what I want to become. There are still a lot of holes that need to fill up. Last night, I finished this simple project where it will randomly generate your public information just by typing your name in the input box just for fun. I shared this project with my programming community and someone said that it was entertaining, I became happy at that point.',
		link: 'https://medium.com/@carenzdelarosa/my-journey-as-a-third-year-bsit-student-3-18-2022-e26e61922f11',
	},
];
