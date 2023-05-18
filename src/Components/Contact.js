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
            <h2 className="contact__instructions__title">Contact Us</h2>
            <p className="contact__instructions__info">
              <span>Address</span>
              <br />
              2 Dorset way
              <br />
              TW2 6NB
              <br />
              Twickenham
              <br />
              <br />
              <span>Working hours</span>
              <br />
              Monday - Friday : 08:00-17:30
              <br />
              Saturday : 09:00-16:00
              <br />
              Sunday : Closed
              <br />
              <br />
              <span>Phone</span>
              <br />
              +44&nbsp;7769&nbsp;316891
              <br />
              +44&nbsp;7798&nbsp;884613
              <br />
              <br />
              <span>Email</span>
              <br />
              contact@totabuildersltd.co.uk
            </p>
          </div>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}

export default Contact;
