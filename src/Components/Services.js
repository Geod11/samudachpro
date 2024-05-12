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
import Mastic2 from "../Assets/RoyaltyFreePhotos/GuttersCollage.jpg";
import RoofCleaning from "../Assets/RoyaltyFreePhotos/RoofWashCollage.jpg";
import Carpentry from "../Assets/RoyaltyFreePhotos/CarpentryCollage.jpg";

function Services() {
  return (
    <div id="topServices" className="services__container">
      <div className="services__mainImageContainer"></div>
      <p className="serivces__main__description">
        <span>Samudachpro </span> este o echipă de constructori de înaltă
        calificare și meseriași toți dedicați să se asigure că proiectul prinde
        forma imaginată. Dacă proiectul dumneavoastră implică un apartament, o
        casă sau un teren și sunteți în căutarea unei echipe cu ochi pentru
        detaliu, pasiune pentru precizie și angajament pentru calitatea
        finisajului, atunci contactați-ne astăzi pentru nevoile dvs. de renovare
        si contruire.
      </p>
      <h1 className="services__main__title">Servicii</h1>

      <ServiceInDetail
        titleTop="Acoperișuri"
        miniTitle=""
        descrTop={`Fiecare client are propriul vis pentru casa lui, propria sa viziune. Rolul nostru este să modelăm echipa noastră și serviciul de renovare în jurul acestei așteptări unice și să ne asigurăm că, oricare ar fi preferințele dumneavoastră, ne putem îndeplini promisiunile. Costul unui astfel de proiect depinde de mulți factori. Nu există o taxă universală, dar ceea ce vă putem asigura este transparența în prețurile noastre, claritatea în detaliile ofertei noastre și hotărârea de a realiza fiecare proiect la timp și în limita bugetului.`}
        imageTop=""
        titleMid=""
        descrMid="Indiferent dacă aveți nevoie de o instalare nouă a unui acoperiș, de înlocuirea unui acoperiș învechit sau de reparații prompte pentru a rezolva scurgerile și daunele, avem experiența necesară pentru a gestiona totul. Concentrându-ne pe utilizarea materialelor premium și pe utilizarea măiestriei calificate, ne asigurăm că acoperișul dumneavoastră este construit pentru a rezista la vreme neprietenoasa și pentru a rezista testului timpului.
        "
        imageMid={Renovation2}
        btnMid="Află mai mult"
        id="renovation"
        collage={true}
      />
      <hr />
      {/* Kitchens */}
      <ServiceInDetail
        titleTop="Mansarde"
        descrTop="Suntem specializati in transformarea spatiilor nefolosite in mansarde uluitoare, functionale. Echipa noastră de experți, formată din meșteri și designeri calificați, este dedicată aducerii la viață a viselor tale la mansardă."
        imageTop={""}
        titleMid=""
        descrMid="Dacă doriți să creați un birou confortabil de acasă, un studio de yoga liniștit sau un dormitor suplimentar, avem experiența necesară pentru a gestiona fiecare aspect al procesului de construcție. Cu o atenție meticuloasă la detalii și un angajament față de calitate, vom maximiza potențialul mansardei tale, adăugând valoare și eleganță casei tale."
        imageMid={Kitchen2}
        btnMid="Află mai mult"
        id="kitchen"
        collage={true}
      />
      <hr />
      {/* Bathrooms */}
      <ServiceInDetail
        titleTop="Hale metalice"
        descrTop="Avem experiență în realizarea de magazii metalice durabile, fiabile și plăcute din punct de vedere estetic, care sunt construite pentru a rezista testului timpului. Echipa noastră calificată de profesioniști combină ingineria de precizie cu materiale de calitate superioară pentru a oferi magazii de calitate superioară, care oferă soluții de depozitare sigure pentru bunurile dumneavoastră de valoare."
        imageTop={""}
        titleMid=""
        descrMid=" De la șoprone compacte de grădină până la structuri spațioase de atelier, oferim o gamă largă de opțiuni personalizabile pentru a se potrivi nevoilor dumneavoastră specifice."
        imageMid={Bathroom2}
        btnMid="Află mai mult"
        id="bathroom"
      />
      <hr />
      <ServiceInDetail
        titleTop="Terase"
        descrTop="Lucrăm pentru a transforma spațiile obișnuite în aer liber în terase extraordinare care să vă ridice experiența de viață. Echipa noastră de experți de designeri și constructori este pasionată de crearea de terase funcționale și elegante, care se îmbină perfect cu arhitectura casei tale. "
        imageTop={""}
        titleMid=""
        descrMid="Indiferent dacă vă imaginați o oază confortabilă pe acoperiș, o zonă vibrantă de divertisment în aer liber sau un refugiu liniștit în grădină, avem experiența necesară pentru a vă aduce viziunea la viață. Cu atenție la detalii și accent pe măiestria de calitate, utilizăm materiale premium pentru a asigura durabilitatea și longevitatea. "
        imageMid={Flooring2}
        btnMid="Află mai mult"
        id="flooring"
      />
      <hr />
      <ServiceInDetail
        titleTop="Foișoare"
        descrTop="Proiectăm și construim foișoare rafinate care adaugă farmec, eleganță și funcționalitate oricărui spațiu exterior. Echipa noastră calificată de meșteri și designeri este dedicată creării de foișoare personalizate care să reflecte stilul tău unic și să-ți îmbunătățească experiența de viață în aer liber."
        imageTop={""}
        titleMid=""
        descrMid={`Fie că îți dorești un refugiu confortabil în grădină, o oază de lux lângă piscină sau un loc captivant pentru evenimente în aer liber, avem expertiza necesară pentru a-ți aduce la viață visele de foișor. Cu o atenție meticuloasă la detalii și un angajament de a folosi materiale de înaltă calitate, ne asigurăm că foișorul dvs. nu este doar uimitor din punct de vedere vizual, ci și construit pentru a rezista la elemente. `}
        imageMid={PlumbingAndElectrics2}
        btnMid="Află mai mult"
        id="plumbingElectrics"
      />
      <hr />
      <ServiceInDetail
        titleTop="Garaje"
        descrTop="Creăm garaje personalizate care oferă depozitare sigură, spațiu de lucru funcțional și valoare adăugată proprietății dumneavoastră. Echipa noastră de constructori și designeri se angajează să furnizeze garaje de cea mai bună calitate, adaptate nevoilor și preferințelor dumneavoastră specifice. Indiferent dacă aveți nevoie de un garaj spațios pentru mai multe mașini, un atelier cu spațiu de depozitare amplu sau un garaj elegant decomandat pentru a completa arhitectura casei dvs., avem expertiza pentru a vă aduce viziunea la viață."
        imageTop={""}
        titleMid=""
        descrMid={`Cu atenție la detalii și accent pe durabilitate, folosim materiale de înaltă calitate și folosim măiestrie calificată pentru a ne asigura că garajul dumneavoastră rezista testului timpului.`}
        imageMid={PaintingAndDecorating2}
        btnMid="Află mai mult"
        id="paintingDecorating"
        collage={true}
      />
      <hr />
      <ServiceInDetail
        titleTop="Garduri"
        descrTop="Construim garduri personalizate care oferă intimitate, securitate și sporesc frumusețea proprietății tale. Echipa noastră calificată de profesioniști este dedicată livrării de garduri de înaltă calitate, adaptate cerințelor dumneavoastră specifice. Fie că îți dorești un gard clasic din lemn, un design modern din aluminiu sau o opțiune de vinil durabil, avem expertiza pentru a-ți aduce viziunea la viață."
        imageTop={""}
        titleMid=""
        descrMid={`Cu o atenție meticuloasă la detalii și un angajament de a folosi materiale premium, ne asigurăm că gardul dvs. nu numai că îndeplinește, ci depășește așteptările dumneavoastră. De la proiecte rezidențiale la proiecte comerciale, oferim soluții cuprinzătoare care îmbină perfect funcționalitatea și estetica.`}
        imageMid={Wallpapering2}
        btnMid="Află mai mult"
        id="wallpapering"
      />
      <hr />
      <ServiceInDetail
        titleTop="Jgheaburi"
        descrTop="Spuneți adio sistemelor tradiționale de jgheaburi și salutați viitorul managementului apei cu jgheaburile dintr-o singura piesă. Acesta prezintă un nou standard pentru eficiență, durabilitate și estetică."
        imageTop={""}
        titleMid=""
        descrMid={`Design fără sudură: Spre deosebire de jgheaburile secționale tradiționale, sistemul nostru dintr-o singură piesă elimină cusăturile, reducând riscul de scurgeri și asigurând un flux fluid al apei.
        Construcție robustă: Fabricate din materiale premium, jgheaburile noastre sunt construite pentru a rezista la cele mai dure condiții meteorologice, oferind protecție de lungă durată proprietății dumneavoastră.
        Aspect elegant: Cu designul său perfect și opțiunile de finisare personalizabile, sporesc atractivitatea oricărei case sau clădiri, adăugând o notă de eleganță modernă.
        Instalare ușoară: Echipa noastră de experți asigură un proces de instalare fără probleme, economisind timp și bătăi de cap, oferind în același timp rezultate impecabile. `}
        imageMid={Mastic2}
        btnMid="Află mai mult"
        id="jgheaburi"
      />
      <hr />
      <ServiceInDetail
        titleTop="Curățare de Acoperișuri"
        descrTop="Echipa noastră de profesioniști este specializată în restaurarea acoperișurilor la strălucirea lor de odinioară, lăsându-le curate și revitalizate."
        imageTop={""}
        titleMid=""
        descrMid={`Curățare amănunțită: folosim tehnici și soluții avansate pentru a elimina murdăria, mușchiul, algele și alți contaminanți de pe suprafața acoperișului dvs.
        Tratament blând: Procesul nostru de curățare este blând, dar eficient, fara nicio deteriorare a șindrilei sau structurii acoperișului dumneavoastră.       
        Rapid și convenabil: Cu metodele noastre eficiente de curățare, acoperișul dumneavoastră va arăta ca nou în cel mai scurt timp, fără a vă perturba rutina zilnică.       
        Protecție: Curățarea regulată a acoperișului nu numai că îmbunătățește aspectul casei tale, ci și prelungește durata de viață a acoperișului, economisind bani pentru reparații costisitoare pe termen lung.
        Nu lăsa un acoperiș murdar să stingă strălucirea casei tale.`}
        imageMid={RoofCleaning}
        btnMid="Află mai mult"
        id="acoperisuri"
      />
      <ServiceInDetail
        titleTop="Dulgherie"
        descrTop="Echipa noastră se mândrește cu zeci de ani de experiență combinată, asigurându-ne că fiecare piesă pe care o creăm este realizată cu abilități și atenție la detalii de neegalat. Indiferent dacă doriți mobilier la comandă, lucrări de lemn complicate sau dulapuri uimitoare, vă transformăm viziunea în realitate cu soluții personalizate care reflectă stilul și preferințele dunmeavoastră unice."
        imageTop={""}
        titleMid=""
        descrMid={`Ne aprovizionăm doar cu lemn de cea mai bună calitate, selectat meticulos pentru frumusețea și durabilitatea sa, asigurându-ne că fiecare piesă rezistă testului timpului. De la concept până la finalizare, echipa noastră dedicată oferă servicii personalizate, ghidându-vă prin fiecare pas al procesului pentru a vă asigura satisfacția deplină.`}
        imageMid={Carpentry}
        btnMid="Află mai mult"
        id="dulgherie"
      />
    </div>
  );
}

export default Services;
