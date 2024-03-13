import React from "react";
import "../Sass/Layout/_footer.scss";
import "../Sass/Base/_typography.scss";
import "../Sass/Base/_utilities.scss";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from "./Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function footer() {
  const animationVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 2 },
  };

  return (
    <motion.footer 
    className="footer"
    variants={animationVariants}
    initial="initial"
    whileInView="animate"
    transition={{duration: 1}}
    viewport={{ once: true }}
    >
      <div className="footer__section--support-us">
        <h2 className="footer-heading margin-bottom">Support Us</h2>
        <Button label='Make a Donation' color='white'/>
      </div>

      <div className="footer__section--contact">
        <h2 className="footer-heading">Contact</h2>
        <p className="margin-bottom">Moulsham Mill Centre, Parkway, Chelmsford CM2 7PX</p>
        <p className="margin-bottom">Tel: 01245 801424</p>
        <p>Please use our contact form to get in touch</p>
      </div>

      <div className="footer__section">
        <h2 className="footer-heading">Follow Us</h2>
        <div className="footer__section--icon-container">
          <Link to={"https://www.facebook.com/profile.php?id=100090151612231"}><FaFacebook className="icon"/></Link>
          <FaInstagram className="icon"/>
          <FaLinkedinIn className="icon"/>
        </div>
      </div>
    </motion.footer>
  );
}
