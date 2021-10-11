import React from "react";
import "../style/home.css";
import { HashLink } from "react-router-hash-link";

function ServiceSingle({ image, title, link }) {
	return (
		<div
			className="ServiceSingle__container"
			style={{ backgroundImage: `url(${image})` }}
		>
			<HashLink smooth to={link}>
				<h2 className="ServiceSingle__title">{title}</h2>
			</HashLink>
		</div>
	);
}

export default ServiceSingle;
