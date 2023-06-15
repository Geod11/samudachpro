import React from "react";
import "../style/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer__mainContainer">
      <div className="footer__innerContainer">
        <div className="footer__workingHours">
          <h2>Program</h2>
          <ul>
            <li>
              Luni<span>08:00-17:00</span>
            </li>
            <li>
              Marți<span>08:00-17:00</span>
            </li>
            <li>
              Miercuri &nbsp;<span>08:00-17:00</span>
            </li>
            <li>
              Joi<span>08:00-17:00</span>
            </li>
            <li>
              Vineri<span>08:00-17:00</span>
            </li>
            <li>
              Sâmbătă<span>Închis</span>
            </li>
            <li>
              Duminică<span>Închis</span>
            </li>
          </ul>
        </div>
        {/* <div className="footer__instagramFeed">
					<h2>Instagram</h2>
				</div> */}
        <div className="footer__officeLocation">
          <h2>Sediu</h2>
          <p>
            Strada Lungă nr.19
            <br />
            Orașul Ocna Mureș
            <br />
            Județul Alba
            <br />
          </p>
        </div>
        <div className="footer__socialMedia">
          <ul>
            <a
              href="https://www.facebook.com/profile.php?id=100063591846277"
              alt="Facebook Icon"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100063591846277"
              alt="Facebook Icon"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <InstagramIcon />
            </a>
          </ul>
        </div>
      </div>
      <div className="footer__endContainer">
        <p>© 2023 - SC SAMUDACHPRO SRL</p>
        <p>
          Pagină web creată de{" "}
          <a
            className="developerSignatureLink"
            href="https://www.linkedin.com/in/george-alexandru-danilescu-6b6aa456/"
            target={"_blank"}
            rel="noreferrer"
          >
            Danilescu George Alexandru
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
