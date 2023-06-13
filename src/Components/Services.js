import React from "react";
import "../style/services.css";
import ServiceInDetail from "./ServiceInDetail";
// Renovation imports

// import Renovation1 from "../Assets/RoyaltyFreePhotos/renovation2.jpg";
import Renovation2 from "../Assets/RoyaltyFreePhotos/Acoperisuri.jpg";
// Flooring imports
// import Flooring1 from "../Assets/RoyaltyFreePhotos/flooring1.jpeg";
import Flooring2 from "../Assets/RoyaltyFreePhotos/Terrace.jpg";
// Kitchens imports
// import Kitchen1 from "../Assets/RoyaltyFreePhotos/kitchen-renovation1.jpeg";
import Kitchen2 from "../Assets/RoyaltyFreePhotos/Mansarde.jpg";
// Bathrroms imports
// import Bathroom1 from "../Assets/RoyaltyFreePhotos/bathroom-renovation1.jpg";
import Bathroom2 from "../Assets/RoyaltyFreePhotos/haleMetalice.jpg";
// Plumbing and electrics imports
// import PlumbingAndElectrics1 from "../Assets/RoyaltyFreePhotos/plumbing2.jpg";
import PlumbingAndElectrics2 from "../Assets/RoyaltyFreePhotos/Gazebos.jpg";
// Painting and Decorating imports
// import PaintingAndDecorating1 from "../Assets/RoyaltyFreePhotos/painting1.jpg";
import PaintingAndDecorating2 from "../Assets/RoyaltyFreePhotos/Garrages.jpg";
// Wallpapering imports
// import Wallpapering1 from "../Assets/RoyaltyFreePhotos/decorating2.jpg";
import Wallpapering2 from "../Assets/RoyaltyFreePhotos/Fences.jpg";

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
      <h1 className="services__main__title">Servicii</h1>

      <ServiceInDetail
        titleTop="Acoperișuri"
        miniTitle=""
        descrTop={`Fiecare client are propriul vis pentru casa lui, propria sa viziune. Rolul nostru este să modelăm echipa noastră și serviciul de renovare în jurul acestei așteptări unice și să ne asigurăm că, indiferent de aspirație, ne putem îndeplini promisiunile.`}
        imageTop=""
        titleMid=""
        descrMid="Costul unui astfel de proiect depinde de mulți factori. Nu există o taxă universală, dar ceea ce vă putem asigura este transparența în prețurile noastre, claritatea în detaliile ofertei noastre și hotărârea de a realiza fiecare proiect la timp și în limita bugetului."
        imageMid={Renovation2}
        btnMid="Află mai mult"
        id="renovation"
        collage={true}
      />
      <hr />
      {/* Kitchens */}
      <ServiceInDetail
        titleTop="Mansarde"
        descrTop=""
        imageTop={""}
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
        imageTop={""}
        titleMid=""
        descrMid=""
        imageMid={Bathroom2}
        btnMid="Află mai mult"
        id="bathroom"
      />
      <hr />
      <ServiceInDetail
        titleTop="Terase"
        descrTop=""
        imageTop={""}
        titleMid=""
        descrMid=""
        imageMid={Flooring2}
        btnMid="Află mai mult"
        id="flooring"
      />
      <hr />
      <ServiceInDetail
        titleTop="Foișoare"
        descrTop=""
        imageTop={""}
        titleMid=""
        descrMid={``}
        imageMid={PlumbingAndElectrics2}
        btnMid="Află mai mult"
        id="plumbingElectrics"
      />
      <hr />
      <ServiceInDetail
        titleTop="Garaje"
        descrTop=""
        imageTop={""}
        titleMid=""
        descrMid={``}
        imageMid={PaintingAndDecorating2}
        btnMid="Află mai mult"
        id="paintingDecorating"
        collage={true}
      />
      <hr />
      <ServiceInDetail
        titleTop="Garduri"
        descrTop=""
        imageTop={""}
        titleMid=""
        descrMid={``}
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
