import React, { useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { HashLink } from "react-router-hash-link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ProjectSingle({
	title,
	srcBefore,
	srcAfter,
	description,
	picturuesCarousel,
	id,
}) {
	const [btnBefore, setBtnBefore] = useState("");
	const [animInit, setAnimInit] = useState(false);
	const beforeCont = useRef(null);
	const afterCont = useRef(null);
	const beforeBtn = useRef(null);
	const afterBtn = useRef(null);

	const mutateArr = (arr) => {
		let newArr = [...arr];
		let result = [];

		for (let i = 0; i < newArr.length; i++) {
			if (i % 2 === false) {
				result.push(newArr.splice(0, 2));
			} else {
				result.push(newArr.splice(0, 3));
			}
		}
		return result;
	};
	const result = mutateArr(picturuesCarousel);
	const setDefaultBeforeAfter = () => {
		beforeCont.current.className = "ProjectSingle__mainImage false false";
		afterCont.current.className = "ProjectSingle__mainImage false false";
		beforeBtn.current.className = "ProjectSingle__beforeBtn btn false";
		afterBtn.current.className = "ProjectSingle__afterBtn btn false";
	};
	return (
		<div className="ProjectSingle__mainContainer">
			<div className="fix-header-a" id={id}></div>
			<h1 className="ProjectSingle__name">{title}</h1>
			<div className="ProjectSingle__firstContainer">
				<div className="ProjectSingle__buttonsCointainer">
					<div
						ref={beforeBtn}
						onClick={() => {
							setBtnBefore("before");
							setAnimInit(true);
						}}
						className={`ProjectSingle__beforeBtn btn ${
							btnBefore === "before" && "btn__active"
						}`}
					>
						BEFORE
					</div>
					<i
						className="fas fa-sync fa-spin ProjectSingle__icon"
						onClick={() => {
							setDefaultBeforeAfter();
						}}
					></i>
					<div
						ref={afterBtn}
						onClick={() => {
							setBtnBefore("after");
							setAnimInit(true);
						}}
						className={`ProjectSingle__afterBtn btn ${
							btnBefore === "after" && "btn__active"
						}`}
					>
						AFTER
					</div>
				</div>
				<div className="ProjectSingle__mainImage__container projects__preloader">
					<img
						className={`ProjectSingle__mainImage ${
							btnBefore === "before" && "img-priority"
						} ${animInit === true && "animation__init-firstImg"}`}
						src={srcBefore}
						alt="Main project"
						loading="lazy"
						ref={beforeCont}
					/>
					<img
						className={`ProjectSingle__mainImage ${
							btnBefore === "after" && "img-priority"
						} ${animInit === true && "animation__init-secondImg"} ${
							btnBefore === "before" && "imageSecondLeft"
						}`}
						src={srcAfter}
						alt="Main project"
						loading="lazy"
						ref={afterCont}
					/>
				</div>
			</div>
			<div className="ProjectSingle__secondContainer">
				{/* ADD DESCRIPTION FOR PROJECTS LATER ON 
				<p className="ProjectSingle__description">{description}</p> */}
				<HashLink to="/contact#contactForm">
					<button className="btn btn-primary">Contact us</button>
				</HashLink>
			</div>
			<div className="ProjectSingle__thirdContainer">
				{/* Carousel form sm, md devices */}
				<Carousel>
					{picturuesCarousel.map((el, i) => (
						<Carousel.Item>
							<img
								src={el}
								alt={` ${i + 1}`}
								className="d-block w-100 ProjectSingle__images__carousel"
							/>
						</Carousel.Item>
					))}
				</Carousel>
			</div>
			{/* Layout for bg devices */}
			<Container className="project__container__layout">
				{result.map((e) => (
					<Row>
						{e.map((img) => (
							<Col>
								<img src={img} alt="Presentation purpose" />
							</Col>
						))}
					</Row>
				))}
			</Container>
		</div>
	);
}

export default ProjectSingle;
