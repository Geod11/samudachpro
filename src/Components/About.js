import React from "react";
import "../style/about.css";
import ProjectVideo from "../Assets/video/1.mp4";
import { HashLink } from "react-router-hash-link";
import ContactForm from "./ContactForm";

function About() {
  return (
    <div id="topAbout">
      <div className="about__mainImageContainer"></div>
      <h2 className="about__main__title">DESPRE NOI</h2>
      <div className="about__innerContainer">
        <p className="about__main__description">
          Bine ați venit la Samudachpro, partenerul dumneavoastră de încredere
          în soluții de construcții și construcții. Cu o reputație solidă pentru
          excelență și angajamentul de a oferi rezultate excepționale, suntem
          mândri să fim una dintre companiile de construcții de top din
          industrie.
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
          <br /> Vă mulțumim că ați considerat Samudachpro partenerul dvs. de
          construcții. Așteptăm cu nerăbdare oportunitatea de a colabora cu
          dumneavoastră și de a vă transforma visele de construcție în
          realitate. Contactați-ne astăzi pentru a discuta despre proiectul dvs.
          și pentru a descoperi cum vă putem aduce viziunea la viață.
        </p>
        <hr className="about__hline_displayNone" />
        <div className="about__featuredProjectContainer">
          <h2 className="about__main__title">QUALITY</h2>
          <video
            playsinline="true"
            webkit-playsinline="true"
            muted
            loop
            src={ProjectVideo}
            autoplay="true"
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
