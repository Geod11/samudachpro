import React from "react";
import ProjectSingle from "./ProjectSingle";
import "../style/projects.css";
// Project 1 Assets
import Project1Before from "../Assets/Projects/Wembley/before.jpeg";
import Project1After from "../Assets/Projects/Wembley/after.jpeg";
import Wembley1 from "../Assets/Projects/Wembley/1.jpeg";
import Wembley2 from "../Assets/Projects/Wembley/2.jpeg";
import Wembley3 from "../Assets/Projects/Wembley/3.jpeg";
import Wembley4 from "../Assets/Projects/Wembley/4.jpeg";
import Wembley5 from "../Assets/Projects/Wembley/5.jpeg";
import Wembley6 from "../Assets/Projects/Wembley/6.jpeg";
import Wembley7 from "../Assets/Projects/Wembley/7.jpeg";
import Wembley8 from "../Assets/Projects/Wembley/8.jpeg";
import Wembley9 from "../Assets/Projects/Wembley/9.jpeg";
import Wembley10 from "../Assets/Projects/Wembley/10.jpeg";
import Wembley11 from "../Assets/Projects/Wembley/11.jpeg";
import Wembley12 from "../Assets/Projects/Wembley/12.jpeg";
import Wembley13 from "../Assets/Projects/Wembley/13.jpeg";
// Project 2 Assets
import Project2Before from "../Assets/Projects/Clapham/before.jpeg";
import Project2After from "../Assets/Projects/Clapham/after.jpeg";
import Clapham1 from "../Assets/Projects/Clapham/1.jpeg";
import Clapham2 from "../Assets/Projects/Clapham/2.jpeg";
import Clapham3 from "../Assets/Projects/Clapham/3.jpeg";
import Clapham4 from "../Assets/Projects/Clapham/4.jpeg";
import Clapham5 from "../Assets/Projects/Clapham/5.jpeg";
import Clapham6 from "../Assets/Projects/Clapham/6.jpeg";
import Clapham7 from "../Assets/Projects/Clapham/7.jpeg";
import Clapham8 from "../Assets/Projects/Clapham/8.jpeg";
import Clapham9 from "../Assets/Projects/Clapham/9.jpeg";
import Clapham10 from "../Assets/Projects/Clapham/10.jpeg";
import Clapham11 from "../Assets/Projects/Clapham/11.jpeg";
import Clapham12 from "../Assets/Projects/Clapham/12.jpeg";
// Project 3 Assets
import Project3Before from "../Assets/Projects/Welsh/before.jpeg";
import Project3After from "../Assets/Projects/Welsh/after.jpeg";
import Welsh1 from "../Assets/Projects/Welsh/1.jpeg";
import Welsh2 from "../Assets/Projects/Welsh/2.jpeg";
import Welsh3 from "../Assets/Projects/Welsh/3.jpeg";

import Welsh5 from "../Assets/Projects/Welsh/5.jpeg";
import Welsh6 from "../Assets/Projects/Welsh/6.jpeg";
import Welsh7 from "../Assets/Projects/Welsh/7.jpeg";
import Welsh8 from "../Assets/Projects/Welsh/8.jpeg";
import Welsh9 from "../Assets/Projects/Welsh/9.jpeg";
import Welsh10 from "../Assets/Projects/Welsh/10.jpeg";
import Welsh11 from "../Assets/Projects/Welsh/11.jpeg";
import Welsh12 from "../Assets/Projects/Welsh/12.jpeg";
import Welsh13 from "../Assets/Projects/Welsh/13.jpeg";
import Welsh14 from "../Assets/Projects/Welsh/14.jpeg";
import Welsh15 from "../Assets/Projects/Welsh/15.jpeg";
import Welsh16 from "../Assets/Projects/Welsh/16.jpeg";
import Welsh17 from "../Assets/Projects/Welsh/17.jpeg";
import Welsh18 from "../Assets/Projects/Welsh/18.jpeg";
import Welsh19 from "../Assets/Projects/Welsh/19.jpeg";
import Welsh20 from "../Assets/Projects/Welsh/20.jpeg";
import Welsh21 from "../Assets/Projects/Welsh/21.jpeg";
import Welsh22 from "../Assets/Projects/Welsh/22.jpeg";
import Welsh23 from "../Assets/Projects/Welsh/23.jpeg";
import Welsh24 from "../Assets/Projects/Welsh/24.jpeg";
import Welsh25 from "../Assets/Projects/Welsh/25.jpeg";

function Projects() {
	return (
		<div id="topProjects" className="projects__container">
			<div className="projects__mainImageContainer"></div>
			<ProjectSingle
				title="Wembley Project"
				srcBefore={Project1Before}
				srcAfter={Project1After}
				description="Wembley Project--> A few words(description) Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Suspendisse id aliquet ante. Donec
				scelerisque ac massa ut porttitor. Fusce neque libero, blandit ut
				placerat eget, rutrum ornare ipsum. Nam eget dolor aliquam,"
				picturuesCarousel={[
					Wembley1,
					Wembley2,
					Wembley3,
					Wembley4,
					Wembley5,
					Wembley6,
					Wembley7,
					Wembley8,
					Wembley9,
					Wembley10,
					Wembley11,
					Wembley12,
					Wembley13,
				]}
				id="project1"
			/>
			<hr />
			<ProjectSingle
				title="Clapham Project"
				srcBefore={Project2Before}
				srcAfter={Project2After}
				description="Clapham Project--> A few words(description) Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Suspendisse id aliquet ante. Donec
				scelerisque ac massa ut porttitor. Fusce neque libero, blandit ut
				placerat eget, rutrum ornare ipsum. Nam eget dolor aliquam,"
				picturuesCarousel={[
					Clapham1,
					Clapham2,
					Clapham3,
					Clapham4,
					Clapham5,
					Clapham6,
					Clapham7,
					Clapham8,
					Clapham9,
					Clapham10,
					Clapham11,
					Clapham12,
				]}
				id="project2"
			/>
			<ProjectSingle
				title="Welsh Hills Project"
				srcBefore={Project3Before}
				srcAfter={Project3After}
				description="Clapham Project--> A few words(description) Lorem ipsum dolor sit
				amet, consectetur adipiscing elit. Suspendisse id aliquet ante. Donec
				scelerisque ac massa ut porttitor. Fusce neque libero, blandit ut
				placerat eget, rutrum ornare ipsum. Nam eget dolor aliquam,"
				picturuesCarousel={[
					Welsh1,
					Welsh2,
					Welsh3,
					Welsh5,
					Welsh6,
					Welsh7,
					Welsh8,
					Welsh9,
					Welsh10,
					Welsh11,
					Welsh12,
					Welsh13,
					Welsh14,
					Welsh15,
					Welsh16,
					Welsh17,
					Welsh18,
					Welsh19,
					Welsh20,
					Welsh21,
					Welsh22,
					Welsh23,
					Welsh24,
					Welsh25,
				]}
				id="project3"
			/>
		</div>
	);
}

export default Projects;
