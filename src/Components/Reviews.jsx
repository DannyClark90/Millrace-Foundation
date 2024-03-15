import React from "react";
import "../Sass/Components/_reviews.scss";
import "../Sass/Base/_utilities.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";

export default function Reviews() {
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
        What Our Beneficiaries Say
      </motion.h2>
      <section className="reviews">
        <Carousel
          data-bs-theme="dark"
          touch={true}
          controls={true}
          indicators={true}
          slide={true}
          interval={4500}
        >
          <CarouselItem>
            <p>
              “My Mental health has dramatically improved because of the work I
              have done at Millrace”
            </p>
            <p>⭐⭐⭐⭐⭐</p>
          </CarouselItem>
          <CarouselItem>
            <p>
              “I feel more in control of my Life and less dependent on others
              and more capable of managing my situation independently”
            </p>
            <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          </CarouselItem>
          <CarouselItem>
            <p>
              “Provided me with opportunity to get a qualification that no one
              else was providing”
            </p>
            <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          </CarouselItem>
          <CarouselItem>
            <p>“Increased my confidence and I now can control my anxiety”</p>
            <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          </CarouselItem>
          <CarouselItem>
            <p>
              “Working with a small team boosted my confidence which in turn
              enables me to control my disability”
            </p>
            <p>⭐ ⭐ ⭐ ⭐ ⭐</p>
          </CarouselItem>
        </Carousel>
      </section>
    </>
  );
}
