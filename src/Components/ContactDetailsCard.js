import "../style/contact.css";

function ContactDetailsCard() {
  return (
    <div className="contact__instructions__container">
      <h2 className="contact__instructions__title">Contact</h2>
      <p className="contact__instructions__info">
        {/* <span>Adresă</span>
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
        <br /> */}
        <br />
        <span>Telefon</span>
        <br />
        +40&nbsp;753&nbsp;769943
        <br />
        <br />
        <span>Email</span>
        <br />
        samuioan12@icloud.com{" "}
      </p>
    </div>
  );
}

export default ContactDetailsCard;
