import React from "react";
import styles from "./Contact.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

function ContactForm() {
  let [name, setName] = useState("Ansu");
  let [email, setEmail] = useState("support@ansu.com");
  let [text, setText] = useState("Hello");

  const onSubmit = (event) => {
    event.preventDefault();
    name = event.target[0].value;

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log("name", event.target[0].value);
    console.log("email", event.target[1].value);
    console.log("text", event.target[2].value);
  };
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt />} />
        </div>
        <Button isOutline={true} text="VIA Email FORM" icon={<HiMail />} />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Email</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="name">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT" />
          </div>
          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm;
