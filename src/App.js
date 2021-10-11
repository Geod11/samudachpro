import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/services">
						<Services />
					</Route>
					<Route path="/projects">
						<Projects />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
