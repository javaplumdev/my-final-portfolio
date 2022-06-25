import React from 'react';
// Project Data
import { VlogData } from '../data/Data';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Router
import { Link } from 'react-router-dom';
// Framer motion
import { motion } from 'framer-motion';

const Blog = () => {
	return (
		<div style={{ marginTop: '6em' }}>
			<h1 className="fw-bold">Blogs</h1>

			<Row>
				{VlogData.map((item) => {
					return (
						<Col
							md="6"
							key={item.vlogID}
							className="d-flex justify-content-center"
						>
							<motion.div whileHover={{ scale: 1.1 }}>
								<a
									href={item.link}
									target="_blank"
									className=" text-decoration-none"
								>
									<div
										className="mt-3 rounded p-3  shadow"
										style={{ maxWidth: '520px' }}
									>
										<p className="fw-bold">{item.vlogTitle}</p>
										<p>{item.content.substring(0, 101)}...</p>
									</div>
								</a>
							</motion.div>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Blog;
