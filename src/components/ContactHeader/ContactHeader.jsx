import React from "react";
import styles from "./ContactHeader.module.css";

function ContactHeader() {
  return (
    <div className={` ${styles.contact_section}`}>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio molestias,
        esse delectus eligendi ipsum qui alias nulla blanditiis nisi rerum.
      </p>
    </div>
  );
}

export default ContactHeader;
