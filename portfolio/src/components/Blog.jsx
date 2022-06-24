import React from 'react';
// Project Data
import { VlogData } from '../data/Data';
// Bootstrap
import { Row, Col } from 'react-bootstrap';
// Router
import { Link } from 'react-router-dom';

const Blog = () => {
	return (
		<div className="mt-5 ">
			<h1 className="fw-bold">Blog</h1>

			<Row>
				{VlogData.map((item) => {
					return (
						<Col
							md="6"
							key={item.vlogID}
							className="d-flex justify-content-center"
						>
							<a
								href={item.link}
								target="_blank"
								className=" text-decoration-none"
							>
								<div
									className="mt-3 border p-3  shadow"
									style={{ maxWidth: '520px' }}
								>
									<p className="fw-bold">{item.vlogTitle}</p>
									<p>{item.content.substring(0, 101)}...</p>
								</div>
							</a>
						</Col>
					);
				})}
			</Row>
		</div>
	);
};

export default Blog;
