import React from 'react';
import Raycast from '../assets/raycast-untitled.png';
import { Skills } from '../data/Data';
import { Row, Col } from 'react-bootstrap';

const About = () => {
	return (
		<div style={{ marginTop: '10em' }}>
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
										src={item.image}
										style={{ maxWidth: '75px' }}
										className="me-4"
									/>
								);
							})}
						</div>
						<b>Education and Certificates</b>
						<div className="shadow rounded p-3 mt-4">
							Python Programming Essentials Course
						</div>
						<div className="shadow rounded p-3 my-4">
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
		</div>
	);
};

export default About;
