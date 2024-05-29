import React from "react";
import "../style/contact.css";
import ContactForm from "./ContactForm";

function Contact() {
  // configure emailJS

  // const client = new SMTPClient({
  // 	user: "danilescubogdan92@yahoo.com",
  // 	password: 'J<"sKv@9}^4?GmhC',
  // 	host: "smtp.mail.yahoo.com.",
  // 	ssl: true,
  // });

  // send the message and get a callback with an error or details of the message that was sent
  // client.send(
  // 	{
  // 		text: "i hope this works",
  // 		from: "you <username@your-email.com>",
  // 		to: "someone <someone@your-email.com>, another <another@your-email.com>",
  // 		cc: "else <else@your-email.com>",
  // 		subject: "testing emailjs",
  // 	},
  // 	(err, message) => {
  // 		console.log(err || message);
  // 	}
  // );

  return (
    <div id="topContact" className="contact__container">
      <div className="contact__mainImageContainer"></div>
      <h1 className="contact__title">CONTACTEAZĂ-NE</h1>
      <p className="contact__info">
        Suntem aici pentru a răspunde la toate întrebările sau pentru a rezerva
        o oră care vă este convenabilă pentru ca unul dintre membrii echipei
        noastre să vină pentru a vă discuta planurile.
        <br />
      </p>
      <div className="contact__container__instructionsPicture">
        <div className="contact__instructions__container">
          <div>
            <h2 className="contact__instructions__title">Contact</h2>
            <p className="contact__instructions__info">
              <span>Adresă</span>
              <br />
              Strada Lungă nr.19
              <br />
              Orașul Ocna Mureș
              <br />
              Județul Alba
              <br />
              <br />
              <span>Program</span>
              <br />
              Luni - Vineri : 08:00-17:00
              <br />
              Sâmbătă - Duminică : Închis
              <br />
              <br />
              <span>Telefon</span>
              <br />
              +40&nbsp;753&nbsp;769943
              <br />
              <span>Email</span>
              <br />
              samuioan12@icloud.com{" "}
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
