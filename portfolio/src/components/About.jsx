import React from 'react';
import Raycast from '../assets/raycast-untitled.png';
import { Skills } from '../data/Data';
import { Row, Col } from 'react-bootstrap';
// Context
import { useContext } from 'react';
import { ContextVariable } from '../context/context-config';
import { motion } from 'framer-motion';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
	const { AnimateHeroText } = useContext(ContextVariable);

	return (
		<motion.div
			variants={AnimateHeroText}
			initial="initial"
			animate="animate"
			style={{ marginTop: '8em' }}
		>
			<h1 className="fw-bold">About</h1>
			<Row className="mt-5 d-flex justify-content-center ">
				<Col md="6">
					<div className="d-flex justify-content-center flex-column">
						<h4>Hi! I'm Charlito Mecarez Jr.</h4>
						<b className="my-4">Technologies</b>
						<div className="d-flex flex-wrap mb-4">
							{Skills.map((item) => {
								return (
									<img
										key={item.id}
										src={item.image}
										style={{ maxWidth: '75px' }}
										className="me-4"
									/>
								);
							})}
						</div>
						<b>Education and Certificates</b>
						<div className="border p-3 mt-4">
							Python Programming Essentials Course
						</div>
						<div className="border p-3 my-4">
							CCNA: Switching, Routing, and Wireless Essentials
						</div>
					</div>
				</Col>

				<Col md="6" className="text-center">
					<img
						src={Raycast}
						style={{ maxWidth: '520px', borderRadius: '20px' }}
						className="w-100"
					/>
				</Col>
			</Row>

			<div style={{ marginTop: '5em' }}>
				<VerticalTimeline lineColor="#00769a">
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{ background: '#00769a', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">College</h3>

						<p>
							Creative Direction, User Experience, Visual Design, Project
							Management, Team Leading
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{ background: '#00769a', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">
							Senior high school
						</h3>

						<p>
							Creative Direction, User Experience, Visual Design, SEO, Online
							Marketing
						</p>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						iconStyle={{ background: '#00769a', color: '#fff' }}
					>
						<h3 className="vertical-timeline-element-title">High school</h3>

						<p>User Experience, Visual Design</p>
					</VerticalTimelineElement>
				</VerticalTimeline>
			</div>
		</motion.div>
	);
};

export default About;
