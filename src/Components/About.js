import React from "react";
import "../style/about.css";
import ProjectVideo from "../Assets/video/1.mp4";
// import { HashLink } from "react-router-hash-link";
// import ContactForm from "./ContactForm";
import styled from "styled-components";

function About() {
  return (
    // <div id="headerAboutRoute">
    <HeaderAboutRoute>
      <MainImageContainer></MainImageContainer>
      <MainTitle>DESPRE NOI</MainTitle>
      <InnerContainer>
        <MainDescription>
          Bine ați venit la Samudachpro, partenerul dumneavoastră de încredere
          în soluții de construcții. Cu o reputație solidă pentru excelență și
          angajamentul de a oferi rezultate excepționale, suntem mândri să fim
          una dintre companiile de construcții de top din industrie.
          <br />
          <br /> La Samudachpro, înțelegem că proiectele de construcție sunt mai
          mult decât cărămizi și mortar. Sunt despre transformarea viselor în
          realitate, creând spații care inspiră și transformă vieți. Cu echipa
          noastră de profesioniști cu experiență și o dedicare pentru măiestria
          de calitate, ne străduim să depășim așteptările și să vă aducem
          viziunea la viață.
          <br />
          <br /> Compania noastră a fost fondată pe principiile integrității,
          profesionalismului și satisfacției clienților. Credem în construirea
          de relații puternice cu clienții noștri, lucrând îndeaproape cu
          aceștia pentru a înțelege nevoile și obiectivele lor unice. Combinând
          expertiza noastră cu soluții inovatoare, livrăm proiecte care sunt
          adaptate pentru a satisface cerințele dumneavoastră specifice la timp
          și în limita bugetului.
          <br />
          <br /> Vă mulțumim că ați considerat Samudachpro, partenerul
          dumneavoastră de construcții. Așteptăm cu nerăbdare oportunitatea de a
          colabora și de a vă transforma visele de construcție în realitate.
          Contactați-ne astăzi pentru a discuta despre proiectul dumneavoastră
          și pentru a descoperi cum vă putem aduce viziunea la viață.
        </MainDescription>
        {/* <hr className="about__hline_displayNone" /> */}
        {/* <div className="about__featuredProjectContainer"> */}
        {/* <h2 className="about__main__title">CALITATE</h2> */}
        <Video
          playsinline="true"
          webkit-playsinline="true"
          muted
          loop
          src={ProjectVideo}
          autoplay="true"
          className="about__video"
        ></Video>
        {/* <HashLink smooth to="/projects#topProjects" className="about__CTA">
            <button className="about__btn btn btn-primary">
              Afla mai mult
            </button>
          </HashLink> */}
        {/* </div> */}
      </InnerContainer>
      {/* <hr className="about__hline_displayBig" /> */}
      {/* Why us <p> */}

      {/* Contact form */}
      {/* <ContactForm className="form-in-aboutUs" hideLogo centerForm /> */}
      {/* </div> */}
    </HeaderAboutRoute>
  );
}

export default About;

const HeaderAboutRoute = styled.div`
  /* @media (min-width: 768px) {
    &div.about__whyUs__container&h2 {
      width: 100%;
    }
    &div.about__innerContainer&p {
      width: 35%;
      padding: 0;
    }
  } */
  @media (min-width: 992px) {
    padding: 0 5% 35px 5%;
  }
  @media (min-width: 1400px) {
    padding: 25px 5% 60px 5%;
  }
`;

const MainImageContainer = styled.div`
  height: 100px;
  color: white;
  text-align: center;
  background-image: url("../Assets/Background-pictures/josh-olalde-X1P1_EDNnok-unsplash.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* @media (min-width: 768px) {
    height: 150px;
  } */
  @media (min-width: 992px) {
    height: 170px;
  }
`;

const MainTitle = styled.h2`
  text-align: center;
  margin: 30px 0 40px 0;
  @media (min-width: 1400px) {
    margin: 0px 0 40px 0;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  @media (min-width: 992px) {
    padding: 0 5%;
  }
`;

const MainDescription = styled.p`
  font-size: large;
  padding: 0 2rem 30px 2rem;
  @media (min-width: 992px) {
    font-size: larger;
  }
  @media (min-width: 1400px) {
    font-size: x-large;
  }
`;

const Video = styled.video`
  width: 300px;
  margin-right: 20px;
`;
