import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
// import Logo from "../Assets/Logo/color1-white_logo_transparent_background.png";
import emailjs from "emailjs-com";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";

function ContactForm({ hideLogo, centerForm }) {
  // Contact form validation
  // Store input values and refs
  const [inputs, setInputs] = useState({});
  const [formValid, setFormValid] = useState(true);
  const GET_TICK_SYMBOL = useRef(null);
  const GET_CLOSE_SYMBOL = useRef(null);
  const RESPONSE_CONTAINER = useRef(null);
  const location = useLocation().pathname;
  console.log(location);
  // Handle change inputs
  const handleInputChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // Send email
  const SendEmail = (e) => {
    const CHILDREN_FORM = Array.from(e.target.parentNode.children);
    const PARENT = e.target.parentElement;

    //Add preloader function-->Start
    const startPreloader = (e) => {
      PARENT.classList.add("preloaderContactForm");
      CHILDREN_FORM.map((c) => c.classList.add("indexMinus"));
    };
    startPreloader(e);

    //Add preloader function-->End
    const removePreloader = (e) => {
      PARENT.classList.remove("preloaderContactForm");
      CHILDREN_FORM.map((c) => c.classList.remove("indexMinus"));
    };

    emailjs
      .sendForm(
        "service_v115sje",
        "template_qj1pj2t",
        e.target.parentElement,
        "2DEifTVyVNAAoXmob"
      )
      .then(
        () => {
          removePreloader(e);
          GET_CLOSE_SYMBOL.current.style.display = "none";
          GET_TICK_SYMBOL.current.style.display = "block";
          RESPONSE_CONTAINER.current.firstChild.innerHTML = "Message Sent";
          RESPONSE_CONTAINER.current.classList.add("make-response-visible");
          setInputs((prevState) => ({
            ...(prevState = {}),
          }));
          setTimeout(() => {
            RESPONSE_CONTAINER.current.classList.remove(
              "make-response-visible"
            );
          }, 3000);
        },
        () => {
          removePreloader(e);
          GET_CLOSE_SYMBOL.current.style.display = "block";
          GET_TICK_SYMBOL.current.style.display = "none";
          RESPONSE_CONTAINER.current.firstChild.innerHTML = "Error. Try again.";
          RESPONSE_CONTAINER.current.classList.add("make-response-visible");
          setInputs((prevState) => ({
            ...(prevState = {}),
          }));
          setTimeout(() => {
            RESPONSE_CONTAINER.current.classList.remove(
              "make-response-visible"
            );
          }, 3000);
        }
      );
  };
  // validate form on submit
  const validateForm = (e) => {
    e.preventDefault();

    if (!inputs.name) {
      setFormValid(false);
    }

    if (!inputs.email) {
      setFormValid(false);
    }

    if (!inputs.message) {
      setFormValid(false);
    } else if (inputs.message && inputs.email && inputs.name) {
      setFormValid(true);
      return true;
    }
  };

  return (
    <div
      className={`contact__form_main_container ${
        location === "/about" && "form-in-aboutUs"
      }`}
    >
      {/* <img
        src={Logo}
        alt="Logo"
        className={`contact__logo_inner ${hideLogo && "hideLogo"}`}
      /> */}
      <div className="fix-header-a" id="contactForm"></div>
      <p className="contact__form__info"></p>
      <form
        id="Contact-Form"
        className={`contact__form__inner ${centerForm && "center-form"}`}
      >
        <h2>Așteptăm mesajul tău</h2>
        <div className="contact__form__input__container">
          <label htmlFor="name" className="contact__form__label">
            Nume*&nbsp;
            {formValid === false && (
              <>
                <br />
                <span className="label-required">Necesar</span>
              </>
            )}
          </label>
          <input
            value={inputs.name || ""}
            onChange={handleInputChange}
            placeholder="..."
            type="text"
            id="name"
            name="name"
            className="contact__form__input form-control-sm"
          />
        </div>
        <div className="contact__form__input__container">
          <label htmlFor="email" className="contact__form__label">
            Email*&nbsp;
            {formValid === false && (
              <>
                <br />
                <span className="label-required">Necesar</span>
              </>
            )}
          </label>
          <input
            value={inputs.email || ""}
            onChange={handleInputChange}
            placeholder="..."
            type="email"
            id="email"
            name="email"
            className="contact__form__input form-control-sm"
          />
        </div>
        <div className="contact__form__input__container">
          <label htmlFor="phone" className="contact__form__label">
            Telefon
          </label>
          <input
            value={inputs.phone || ""}
            onChange={handleInputChange}
            placeholder="..."
            type="text"
            id="phone"
            name="phone"
            className="contact__form__input form-control-sm"
          />
        </div>
        {/* <div className="contact__form__input__container">
          <label htmlFor="postcode" className="contact__form__label">
            Postcode
          </label>
          <input
            value={inputs.postcode || ""}
            onChange={handleInputChange}
            placeholder="Postcode..."
            type="text"
            id="postcode"
            name="postcode"
            className="contact__form__input form-control-sm"
          />
        </div> */}
        <div className="contact__form__input__container">
          <label htmlFor="Message" className="contact__form__label">
            Mesaj*
            {formValid === false && (
              <>
                <br />
                <span className="label-required">Necesar</span>
              </>
            )}
          </label>
          <textarea
            value={inputs.message || ""}
            onChange={handleInputChange}
            placeholder="..."
            id="message"
            name="message"
            className="contact__form__input form-control-sm"
            rows="4"
            cols="50"
          ></textarea>
        </div>
        <button
          onClick={(e) => {
            if (validateForm(e) === true) {
              SendEmail(e);
            }
          }}
          className="contact__form__btn btn"
          type="submit"
          value="Submit"
        >
          Trimite
        </button>
        <div ref={RESPONSE_CONTAINER} className="Contact__responseContainer">
          <h2>Mesajul a fost trimis</h2>
          <CheckCircleIcon ref={GET_TICK_SYMBOL} />
          <CancelIcon ref={GET_CLOSE_SYMBOL} />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
