import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const contactDetails = [
    {
      icon: "contact/emailIcon.png",
      alt: "Email icon",
      href: "mailto:piyushdas1803@gmail.com",
      text: "piyushdas1803@gmail.com",
    },
    {
      icon: "contact/linkedinIcon.png",
      alt: "LinkedIn icon",
      href: "https://www.linkedin.com/in/piyush-das-b99595248/",
      text: "LinkedIn - PIYUSH",
    },
    {
      icon: "contact/githubIcon.png",
      alt: "Github icon",
      href: "https://github.com/21037piyush",
      text: "Github - PIYUSH",
    },
  ];

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        {contactDetails.map((detail, index) => (
          <li key={index} className={styles.link}>
            <img src={getImageUrl(detail.icon)} alt={detail.alt} />
            <a href={detail.href}>{detail.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
