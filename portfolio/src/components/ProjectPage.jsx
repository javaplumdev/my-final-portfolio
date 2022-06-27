// Projects page
import { ProjectsData } from '../data/Data.js';
// Framer motion
import { motion } from 'framer-motion';
// Router
import { Link } from 'react-router-dom';

const ProjectPage = () => {
	return (
		<>
			<h4 className="fw-bold mb-5">Projects that made with love.</h4>
			<p>Website applications / Website Designs</p>
			<div className="d-flex flex-wrap justify-content-center">
				{ProjectsData.map((item) => {
					return (
						<motion.div
							whileHover={{ scale: 1.1 }}
							key={item.projectID}
							className="m-3"
							whileInView="visible"
							initial="hidden"
							viewport={{ once: true }}
							transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 2 }}
							variants={{
								visible: {
									opacity: 1,
									y: 0,
								},
								hidden: { opacity: 0, y: -100 },
							}}
							style={{ maxWidth: '320px' }}
						>
							<Link
								to={`/projectpage/${item.projectID}`}
								className="text-decoration-none"
							>
								<img src={item.image} className="project w-100" />
								<p>{item.projectName}</p>
							</Link>
						</motion.div>
					);
				})}
			</div>
		</>
	);
};

export default ProjectPage;
