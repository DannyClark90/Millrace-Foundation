import React from "react";
import "../Sass/Components/_mission.scss";
import "../Sass/Base/_utilities.scss";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <>
      <article className="mission-card">
        <h2 className="section-heading margin-bottom">Our Mission</h2>
        <p className="mission-card_paragraph margin-bottom">
          To help improve lives and our community, by providing a safe
          structured therapeutic work based environment, while teaching craft
          skills, which develops a sense of social inclusion for any
          beneficiary.
        </p>
        <div className="mission-card__buttons">
          <Link to="#">
            <Button label={"About Us"} />
          </Link>
          <Link to="#">
            <Button label={"What We Do"} />
          </Link>
        </div>
      </article>
    </>
  );
}
