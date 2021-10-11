import React from "react";
import { HashLink } from "react-router-hash-link";
import "../style/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Footer() {
	return (
		<div className="footer__mainContainer">
			<div className="footer__innerContainer">
				<div className="footer__workingHours">
					<h2>Working Hours</h2>
					<ul>
						<li>
							Monday<span>08:00-17:30</span>
						</li>
						<li>
							Tuesday<span>08:00-17:30</span>
						</li>
						<li>
							Wednesday<span>08:00-17:30</span>
						</li>
						<li>
							Thursday<span>08:00-17:30</span>
						</li>
						<li>
							Friday<span>08:00-17:30</span>
						</li>
						<li>
							Saturday<span>09:00-16:00</span>
						</li>
						<li>
							Sunday<span>Closed</span>
						</li>
					</ul>
				</div>
				{/* <div className="footer__instagramFeed">
					<h2>Instagram</h2>
				</div> */}
				<div className="footer__officeLocation">
					<h2>Richmond Office</h2>
					<p>
						2 Dorset Way
						<br />
						Twickenham
						<br />
						TW2 6NB
						<br />
					</p>
				</div>
				<div className="footer__socialMedia">
					<ul>
						<FacebookIcon />
						<InstagramIcon />
						<LinkedInIcon />
					</ul>
				</div>
			</div>
			<div className="footer__endContainer">
				<p>© 2021 - Tota Builders Ltd</p>
				<ul className="footer__breadCrumbs">
					<HashLink smooth to="/#topHome">
						<li className="footer__item">Home</li>
					</HashLink>
					<HashLink smooth to="/about#topAbout">
						<li className="footer__item">About</li>
					</HashLink>
					<HashLink smooth to="/services#topServices">
						<li className="footer__item">Services</li>
					</HashLink>
					<HashLink smooth to="/projects#topProjects">
						<li className="footer__item">Projects</li>
					</HashLink>
					<HashLink smooth to="/contact#topContact">
						<li className="footer__item">Contact</li>
					</HashLink>
				</ul>
				{/* ADD COMPANY NUMBER AND VAT LATER ON 
				<p>Company Nr:(Company Nr.) | VAT Nr:(Vat Nr.)</p> */}
			</div>
		</div>
	);
}

export default Footer;
