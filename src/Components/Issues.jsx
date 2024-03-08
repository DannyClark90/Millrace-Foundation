import React from "react";
import "../Sass/Components/_issues.scss";
import "../Sass/Base/_utilities.scss";
import { motion } from "framer-motion";

export default function Issues() {
  return (
    <section className="issues">
      <h2 className="section-heading margin-bottom-4">The Issues</h2>
      <div className="issues__grid">
        <img
          className="issues__img"
          src="src/assets/Issues.png"
          alt="Depressed looking person"
        />

        <div className="issues__card">
          <p>
            4 to 10% of people of Essex will experience mental illness in their
            lifetime.
          </p>
        </div>

        <div className="issues__card">
          <p>
            Common mental health problems such as depression, anxiety and
            suicidal thoughts can affect you and your family at anytime.
          </p>
        </div>

        <div className="issues__card">
          <p>
            Mixed anxiety and depression have been estimated to cause one fifth
            of days lost from work in the UK. One of the major causes of social
            isolation today.
          </p>
        </div>

        <div className="issues__card">
          <p>
            High rates of suicide exist currently in our local community and in
            some areas above the national average.
          </p>
        </div>
      </div>
    </section>
  );
}
