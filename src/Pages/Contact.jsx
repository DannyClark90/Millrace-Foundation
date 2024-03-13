import React from "react";

export default function Contact() {
  return (
    <section className="contact">
      <form action="" className="contact__form">
        <h2 className="contact__form__heading section-heading--sub-white">
          Contact Us
        </h2>


        <input
          className="contact__form__input"
          type="text"
          placeholder="First Name..."
        />

        <input
          className="contact__form__input"
          type="text"
          placeholder="Last Name..."
        />
        <input
          className="contact__form__input"
          type="text"
          placeholder="E-mail..."
        />

        <input
          className="contact__form__input"
          type="text"
          placeholder="Subject..."
        />

        <input
          className="contact__form__input--message"
          type="text"
          placeholder="Message..."
        />
        
        <div className="contact__details">
          <h3 className="section-heading--sub">Where To Find Us</h3>
          <p className="">
            Moulsham Mill Centre <br /> Parkway <br /> Chelmsford <br />
            CM2 7PX
          </p>
          <h3 className="section-heading--sub">Call Us</h3>
          <p>01245 801424</p>
        </div>
      </form>
    </section>
  );
}
