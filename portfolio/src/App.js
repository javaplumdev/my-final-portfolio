import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Blog from './components/Blog';
import ProjectPage from './components/ProjectPage';
import ProjectContentPage from './components/ProjectContentPage';
import About from './components/About';
import Footer from './components/Footer';
import Contacts from './components/Contacts';
// Bootstrap
import { Container } from 'react-bootstrap';
// React Router
import { Route, Routes } from 'react-router-dom';
// Context
import { ContextFunction } from './context/context-config';

function App() {
	return (
		<ContextFunction>
			<div className="App">
				<Container>
					<Navbar />
					<Routes>
						<Route
							path="/"
							element={
								<>
									<Hero />
									<Projects />
									<Blog />
									<About />
									<Contacts />
								</>
							}
						/>

						<Route path="/about" element={<About />} />
						<Route path="/projectpage" element={<ProjectPage />} />
						<Route path="/projectpage/:id" element={<ProjectContentPage />} />
						<Route path="/contacts" element={<Contacts />} />
					</Routes>
					<Footer />
				</Container>
			</div>
		</ContextFunction>
	);
}

export default App;
