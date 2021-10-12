import React from "react";
import "../style/about.css";
import ProjectVideo from "../Assets/video/1.mp4";
import { HashLink } from "react-router-hash-link";
import ContactForm from "./ContactForm";

function About() {
	return (
		<div id="topAbout">
			<div className="about__mainImageContainer"></div>
			<h2 className="about__main__title">ABOUT US</h2>
			<div className="about__innerContainer">
				<p className="about__main__description">
					Our team is committed to building long-term relationships based on
					reliability, performance, value, and client satisfaction.
					<br />
					<br /> We will continue to meet the changing needs of our clients with
					our quality services delivered by our professional team.
				</p>
				<hr className="about__hline_displayNone" />
				<div className="about__featuredProjectContainer">
					<h2 className="about__main__title">QUALITY</h2>
					<video
						playsinline
						webkit-playsinline
						muted
						loop
						src={ProjectVideo}
						autoplay
						controls
						className="about__video"
					></video>
					<HashLink smooth to="/projects#topProjects" className="about__CTA">
						<button className="about__btn btn btn-primary">
							Find Out More
						</button>
					</HashLink>
				</div>
			</div>
			<hr className="about__hline_displayBig" />
			{/* Why us <p> */}

			{/* Contact form */}
			<ContactForm className="form-in-aboutUs" hideLogo centerForm />
		</div>
	);
}

export default About;
