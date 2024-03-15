import React from "react";
import "../Sass/Components/_local-benefits.scss";
import "../Sass/Base/_utilities.scss";
import { motion, useScroll } from "framer-motion";

export default function LocalBenefits() {
  const animationVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <>
      <motion.h2
        className="section-heading"
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
      >
        Local Benefits
      </motion.h2>
      <section className="local-benefits">
        <div className="local-benefits__image-container">
          <div className="local-benefits_images">
            <motion.img
              className="img"
              src="src/assets/Chronical Picture.jpg"
              alt="Antique chair before restoration."
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />

            <motion.img
              className="img"
              src="src/assets/Evening-class.jpg"
              alt="Antique chair sanded & polished. Finish restored!"
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />
          </div>

          <div className="local-benefits_images">
            <motion.img
              className="img"
              src="src/assets/Workshop.png"
              alt="Antique chair sanded & polished. Finish restored!"
              variants={animationVariants}
              initial="initial"
              transition={{ duration: 0.8 }}
              whileInView="animate"
              viewport={{ once: true }}
            />
          </div>
        </div>

        <motion.article
          className="local-benefits__article"
          variants={animationVariants}
          initial="initial"
          transition={{ duration: 0.8 }}
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p>
            In the Mid Essex community Millrace provides a vocational
            rehabilitation service to people aged between 18 and over recovering
            from mental illness, who, because of the nature of their disability,
            experience barriers to full participation within the community.
          </p>
          <br />
          <p>
            We also provide a proven facility where equality of access is
            available to all people referred to us. We welcome people from all
            backgrounds.
          </p>
          <br />
          <p>
            We are committed to equal opportunity, regardless of race, color,
            ancestry, religion, sex, national origin, sexual orientation, age,
            citizenship, marital status, disability, gender identity or Veteran
            status
          </p>
          <br />
          <p>It is our prime motivation to make a lasting difference to all the beneficies lives we come in contact with, including the wider community. </p>
        </motion.article>
      </section>
    </>
  );
}
