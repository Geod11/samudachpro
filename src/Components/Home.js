import React from "react";
import { HashLink } from "react-router-hash-link";
import ServiceSingle from "./ServiceSingle";
import "../style/home.css";
// import Carousel from "react-bootstrap/Carousel";
// import TestimonialsBackground from "../Assets/Background-pictures/testimonialsBackground.jpg";
// import StarIcon from "@material-ui/icons/Star";
// Import main Images (Services)
import PaintingMain from "../Assets/RoyaltyFreePhotos/GarrageMain.jpeg";
import Kitchen2 from "../Assets/RoyaltyFreePhotos/AtticMain.jpeg";
import Bathroom2 from "../Assets/RoyaltyFreePhotos/MetalShedMain.jpeg";
import Flooring2 from "../Assets/RoyaltyFreePhotos/TerraceMain.jpeg";
import PlumbingMain from "../Assets/RoyaltyFreePhotos/GazeboMain.jpeg";
import Renovation2 from "../Assets/RoyaltyFreePhotos/RoofMain.jpeg";
import FenceMain from "../Assets/RoyaltyFreePhotos/FenceMain.jpeg";
// Import main Images (Projects)
// import Wembley from "../Assets/Projects/Wembley/3.jpeg";
// import Clapham from "../Assets/Projects/Clapham/8.jpeg";
// import Welsh from "../Assets/Projects/Welsh/4.jpeg";

function Home() {
  return (
    <div id="topHome" className="home__container">
      <div className="home__mainImageContainer"></div>
      <div className="home__aboutSection">
        <h1 className="home__aboutSection__title">Samudachpro</h1>
        <p className="home__aboutSection__description">
          SC Samudachpro SRL este o companie de construcții cu sediul în Ocna
          Mureș care este specializată în construirea de acoperișuri, mansarde,
          hale metalice, terase, foișoare, garaje și garduri.
        </p>
      </div>
      <hr />
      <h1 className="home__Services__title">Servicii</h1>
      <div className="home__servicesContainer">
        <ServiceSingle
          title="Acoperișuri "
          image={Renovation2}
          link="/services#renovation"
        />
        <br />
        <ServiceSingle
          title="Mansarde "
          image={Kitchen2}
          link="/services#kitchen"
        />
        <br />
        <ServiceSingle
          title="Hale metalice "
          image={Bathroom2}
          link="/services#bathroom"
        />
        <br />
        <ServiceSingle
          title="Terase "
          image={Flooring2}
          link="/services#flooring"
        />
        <br />
        <ServiceSingle
          title="Foișoare "
          image={PlumbingMain}
          link="/services#plumbingElectrics"
        />
        <br />
        <ServiceSingle
          title="Garaje "
          image={PaintingMain}
          link="/services#paintingDecorating"
        />
        <br />
        <ServiceSingle
          title="Garduri "
          image={FenceMain}
          link="/services#paintingDecorating"
        />
      </div>
      <HashLink to="/services#topServices">
        <button className="home__readMoreServices btn btn-primary">
          Alfa mai mult
        </button>
      </HashLink>
      {/* 
      <hr />
      <h1 className="home__Projects__title">Latest Projects</h1>
      <div className="home__servicesContainer home__servicesContainer-Projects ">
        <ServiceSingle
          title="Wembley"
          image={Wembley}
          link="/projects#project1"
        />
        <ServiceSingle
          title="Clapham"
          image={Clapham}
          link="/projects#project2"
        />
        <ServiceSingle
          title="Welsh Hills"
          image={Welsh}
          link="/projects#project3"
        />
      </div>
      <HashLink to="/Projects#topProjects">
        <button className="home__readMoreProjects btn btn-primary">
          Find Out More
        </button>
      </HashLink>
      <hr />
      <h2 className="Testimonials">Testimonials</h2> */}
      {/* Carousel */}
      {/* <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 home__testimonials__image"
            src={TestimonialsBackground}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>John B. </h3>
            <p>
              I am so happy I came across Tota Builders After dreadful few
              months dealing with an unprofessional construction company! Harry
              and Stivi were working on my project of completely refurbishing my
              apartment. Everything has been done with good quality and good
              value.
            </p>
            <div className="stars__container">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 home__testimonials__image"
            src={TestimonialsBackground}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Rachel D.</h3>
            <p>
              I am pleased with and grateful for their work on my flat
              refurbishment. From site build, to final finishing touch. They
              helped me throughout the project. They were really professional
              and did not compromise on the quality of their job.{" "}
            </p>
            <div className="stars__container">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}

export default Home;
