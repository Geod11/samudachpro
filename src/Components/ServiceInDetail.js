import React from "react";
import { HashLink } from "react-router-hash-link";

function ServiceInDetail({
	titleTop,
	descrTop,
	imageTop,
	titleMid,
	descrMid,
	imageMid,
	btnMid,
	id,
	miniTitle,
	collage,
}) {
	return (
		<div className="ServiceDetail__container">
			<div className="fix-header-a" id={id}></div>
			<div
				className={`ServiceDetail__topContainer ${
					{ id }.id === "mastic" && "mastic__class"
				}`}
			>
				<h2 className="ServiceDetail__topContainer__title">{titleTop}</h2>
				<p className="ServiceDetail__topContainer__descr align-center">
					{miniTitle}
				</p>
				<p
					className={`ServiceDetail__topContainer__descr ${
						Object.values({ descrTop })[0] === false && "display-none"
					}`}
				>
					{descrTop}
				</p>
				<div
					style={{ backgroundImage: `url(${imageTop})` }}
					className={`ServiceDetail__topContainer__img ${
						Object.values({ id })[0] === "mastic" && "Service__hide__topImg"
					}`}
				></div>
			</div>
			<div className="ServiceDetail__midContainer">
				<h2 className="ServiceDetail__midContainer__title">{titleMid}</h2>
				<p className="ServiceDetail__midContainer__descr">{descrMid}</p>
				<div
					style={{ backgroundImage: `url(${imageMid})` }}
					className={`ServiceDetail__midContainer__img ${collage && "collage"}`}
				></div>
				<HashLink to="/contact#contactForm">
					<button className="ServiceDetail__midContainer__button btn">
						{btnMid}
					</button>
				</HashLink>
			</div>
		</div>
	);
}

export default ServiceInDetail;
