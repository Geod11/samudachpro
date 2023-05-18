import React from "react";
import "../style/footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className="footer__mainContainer">
      <div className="footer__innerContainer">
        <div className="footer__workingHours">
          <h2>Working Hours</h2>
          <ul>
            <li>
              Monday<span>08:00-17:30</span>
            </li>
            <li>
              Tuesday<span>08:00-17:30</span>
            </li>
            <li>
              Wednesday<span>08:00-17:30</span>
            </li>
            <li>
              Thursday<span>08:00-17:30</span>
            </li>
            <li>
              Friday<span>08:00-17:30</span>
            </li>
            <li>
              Saturday<span>09:00-16:00</span>
            </li>
            <li>
              Sunday<span>Closed</span>
            </li>
          </ul>
        </div>
        {/* <div className="footer__instagramFeed">
					<h2>Instagram</h2>
				</div> */}
        <div className="footer__officeLocation">
          <h2>Richmond Office</h2>
          <p>
            2 Dorset Way
            <br />
            Twickenham
            <br />
            TW2 6NB
            <br />
          </p>
        </div>
        <div className="footer__socialMedia">
          <ul>
            <FacebookIcon />
            <InstagramIcon />
          </ul>
        </div>
      </div>
      <div className="footer__endContainer">
        <p>© 2023 - SC SAMUDACHPRO SRL</p>
      </div>
    </div>
  );
}

export default Footer;
