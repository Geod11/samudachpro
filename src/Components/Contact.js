import React from "react";
import "../style/contact.css";
import ContactForm from "./ContactForm";
import ContactDetailsCard from "./ContactDetailsCard";

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
        o oră care vă este convenabilă astfel încât unul dintre membrii echipei
        noastre să vă contacteze pentru a vă ajuta cu informații suplimentare.
        <br />
      </p>
      <div className="contact__container__instructionsPicture">
        <ContactForm />
        <ContactDetailsCard />
      </div>
    </div>
  );
}

export default Contact;
