import React from "react";
import "../style/services.css";
import ServiceInDetail from "./ServiceInDetail";
// Renovation imports

import Renovation1 from "../Assets/RoyaltyFreePhotos/renovation2.jpg";
import Renovation2 from "../Assets/RoyaltyFreePhotos/renovation-main2.jpeg";
// Flooring imports
import Flooring1 from "../Assets/RoyaltyFreePhotos/flooring1.jpeg";
import Flooring2 from "../Assets/RoyaltyFreePhotos/flooring2.jpg";
// Kitchens imports
import Kitchen1 from "../Assets/RoyaltyFreePhotos/kitchen-renovation1.jpeg";
import Kitchen2 from "../Assets/RoyaltyFreePhotos/kitchen-renovation2.jpg";
// Bathrroms imports
import Bathroom1 from "../Assets/RoyaltyFreePhotos/bathroom-renovation1.jpg";
import Bathroom2 from "../Assets/RoyaltyFreePhotos/bathroom-renovation2.jpg";
// Plumbing and electrics imports
import PlumbingAndElectrics1 from "../Assets/RoyaltyFreePhotos/plumbing2.jpg";
import PlumbingAndElectrics2 from "../Assets/RoyaltyFreePhotos/electrics2.jpg";
// Painting and Decorating imports
import PaintingAndDecorating1 from "../Assets/RoyaltyFreePhotos/painting1.jpg";
import PaintingAndDecorating2 from "../Assets/RoyaltyFreePhotos/decorating1.jpg";
// Wallpapering imports
import Wallpapering1 from "../Assets/RoyaltyFreePhotos/decorating2.jpg";
import Wallpapering2 from "../Assets/RoyaltyFreePhotos/renovation1.jpg";
// Mastic imports
import Mastic1 from "../Assets/RoyaltyFreePhotos/mastic1.jpeg";
import Mastic2 from "../Assets/RoyaltyFreePhotos/mastic2.jpeg";

function Services() {
  return (
    <div id="topServices" className="services__container">
      <div className="services__mainImageContainer"></div>
      <p className="serivces__main__description">
        <span>Samudachpro </span> este o echipă de constructori de înaltă
        calificare și meseriași toți dedicați să se asigure că proiectul prinde
        forma imaginată. Dacă proiectul dumneavoastră implică un apartament sau
        o casă renovare în NUME_ORAS și sunteți în căutarea unei echipe cu ochi
        pentru detaliu, pasiune pentru precizie și angajament pentru calitatea
        finisajului, atunci contactați-ne astăzi pentru nevoile dvs. de
        renovare.
      </p>
      <h1 className="services__main__title">Services</h1>

      <ServiceInDetail
        titleTop="Acoperișuri"
        miniTitle=""
        descrTop={`Fiecare client are propriul vis pentru casa lui, propria sa viziune. Rolul nostru este să modelăm echipa noastră și serviciul de renovare în jurul acestei așteptări unice și să ne asigurăm că, indiferent de aspirație, ne putem îndeplini promisiunile.`}
        imageTop={Renovation2}
        titleMid="How it works"
        descrMid="Costul unui astfel de proiect depinde de mulți factori. Nu există o taxă universală, dar ceea ce vă putem asigura este transparența în prețurile noastre, claritatea în detaliile ofertei noastre și hotărârea de a realiza fiecare proiect la timp și în limita bugetului."
        imageMid={Renovation1}
        btnMid="Află mai mult"
        id="renovation"
        collage={true}
      />
      <hr />
      {/* Kitchens */}
      <ServiceInDetail
        titleTop="Mansarde"
        descrTop=""
        imageTop={Kitchen1}
        titleMid=""
        descrMid=""
        imageMid={Kitchen2}
        btnMid="Află mai mult"
        id="kitchen"
        collage={true}
      />
      <hr />
      {/* Bathrooms */}
      <ServiceInDetail
        titleTop="Hale metalice"
        descrTop=""
        imageTop={Bathroom1}
        titleMid="What we do"
        descrMid="Tota Builders installers are some of the very best tradespeople in London with in-house design to create a bespoke bathroom which will live up to your every expectation.Specialist tilers, skilled in all materials, from marble and  travertine to hand made tiles, produce perfect results every time while our carpenters can handcraft units to exact specifications. We ensure minimum disruption and will always leave your premises clean and tidy following our visit."
        imageMid={Bathroom2}
        btnMid="Află mai mult"
        id="bathroom"
      />
      <hr />
      <ServiceInDetail
        titleTop="Terase"
        descrTop=""
        imageTop={Flooring1}
        titleMid="How it works"
        descrMid="Our carpenters are experienced to suit the project whether floors, staircases cupboards or complete refurbishments.Our tradesmen always ensure minimum disruption and that they leave your property clean and tidy following their visit."
        imageMid={Flooring2}
        btnMid="Află mai mult"
        id="flooring"
      />
      <hr />
      <ServiceInDetail
        titleTop="Foișoare"
        descrTop=""
        imageTop={PlumbingAndElectrics1}
        titleMid="The process"
        descrMid={`We offer a highly professional service throughout London and within the M25, using a team of qualified and experienced plumbers & Electricians. We can provide you with a solution for any issue, from a plumbing related problem to the design and creation of a new bathroom or kitchen. Our electricians are fully qualified to undertake all types of domestic and commercial electrical work from a new plug socket to a complete, or partial, rewiring of your property professionally and efficiently.`}
        imageMid={PlumbingAndElectrics2}
        btnMid="Află mai mult"
        id="plumbingElectrics"
      />
      <hr />
      <ServiceInDetail
        titleTop="Garaje"
        descrTop=""
        imageTop={PaintingAndDecorating1}
        titleMid="What we do"
        descrMid={`We aim to help you create a home out of your house. A home that tells the story you want it to. Change the outlook of your home—whether new or not— and create an aesthetic environment and a surreal ambiance around you as per your distinctive taste.`}
        imageMid={PaintingAndDecorating2}
        btnMid="Află mai mult"
        id="paintingDecorating"
        collage={true}
      />
      <hr />
      <ServiceInDetail
        titleTop="Garduri"
        descrTop=""
        imageTop={Wallpapering1}
        titleMid="How it works"
        descrMid={`We are well experienced in a wide range of wall-covering and wallpapers installations.Wallpaper installation is fine work and requires utmost precision, as well as elaborate professional skills, especially, when it comes to designer paper or luxury types of aesthetic wallpapers. We are proud to have a team of specialists, who put great attention to the smallest detail, ensuring immaculate results. Our clients have never been disappointed with the quality of our work and the dedication with which we embrace every project.`}
        imageMid={Wallpapering2}
        btnMid="Află mai mult"
        id="wallpapering"
      />
      {/* <hr />
      <ServiceInDetail
        titleTop="Mastic"
        descrTop=""
        imageTop={Mastic1}
        titleMid="The process"
        descrMid={`Tota Builders deliver internal and external silicone for clients through the UK with the highest quality joint sealing. With our dedication to quality and reliability, we always look towards building long term business relationships with all our customers.`}
        imageMid={Mastic2}
        btnMid="Get in Touch"
        id="mastic"
      /> */}
    </div>
  );
}

export default Services;
