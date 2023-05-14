import React from "react";
import { HashLink } from "react-router-hash-link";
import ServiceSingle from "./ServiceSingle";
import "../style/home.css";
import Carousel from "react-bootstrap/Carousel";
import TestimonialsBackground from "../Assets/Background-pictures/testimonialsBackground.jpg";
import StarIcon from "@material-ui/icons/Star";
// Import main Images (Services)
import PaintingMain from "../Assets/RoyaltyFreePhotos/painting1.jpg";
import KitchenMain from "../Assets/RoyaltyFreePhotos/kitchen-main.jpg";
import BathroomMain from "../Assets/RoyaltyFreePhotos/bathroom-main.jpg";
import FlooringMain from "../Assets/RoyaltyFreePhotos/flooring-main.jpg";
import PlumbingMain from "../Assets/RoyaltyFreePhotos/plumbing-main.jpg";
import RenovationMain from "../Assets/RoyaltyFreePhotos/renovation-main2.jpeg";

// Import main Images (Projects)
import Wembley from "../Assets/Projects/Wembley/3.jpeg";
import Clapham from "../Assets/Projects/Clapham/8.jpeg";
import Welsh from "../Assets/Projects/Welsh/4.jpeg";

function Home() {
  return (
    <div id="topHome" className="home__container">
      <div className="home__mainImageContainer"></div>
      <div className="home__aboutSection">
        <h1 className="home__aboutSection__title">Samudachpro</h1>
        <p className="home__aboutSection__description">
          Tota Builders are a company in London that specialises in exceptional
          Renovations and General building works.
        </p>
      </div>
      <hr />
      <h1 className="home__Services__title">Services</h1>
      <div className="home__servicesContainer">
        <ServiceSingle
          title="Renovations"
          image={RenovationMain}
          link="/services#renovation"
        />
        <ServiceSingle
          title="Kitchens "
          image={KitchenMain}
          link="/services#kitchen"
        />
        <ServiceSingle
          title="Bathrooms "
          image={BathroomMain}
          link="/services#bathroom"
        />
        <ServiceSingle
          title="Flooring "
          image={FlooringMain}
          link="/services#flooring"
        />
        <ServiceSingle
          title="Plumbing & Electrics"
          image={PlumbingMain}
          link="/services#plumbingElectrics"
        />
        <ServiceSingle
          title="Painting & Decorating"
          image={PaintingMain}
          link="/services#paintingDecorating"
        />
      </div>
      <HashLink to="/services#topServices">
        <button className="home__readMoreServices btn btn-primary">
          Read More
        </button>
      </HashLink>

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
      <h2 className="Testimonials">Testimonials</h2>
      {/* Carousel */}
      <Carousel>
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
      </Carousel>
    </div>
  );
}

export default Home;
