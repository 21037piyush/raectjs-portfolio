import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const skills = [
    {
      icon: "cursorIcon.png",
      title: "Frontend Developer",
      description:
        "I'm a frontend developer with experience in building responsive and optimized sites.",
    },
    {
      icon: "serverIcon.png",
      title: "Backend Developer",
      description:
        "Experienced in working with APIs and creating them for efficient and seamless integrations.",
    },
    {
      icon: "uiIcon.png",
      title: "UI/UX Designer",
      description:
        "I've crafted various landing pages and put together design systems too!",
    },
  ];

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.aboutItem}>
              <img
                src={getImageUrl(`about/${skill.icon}`)}
                alt={`${skill.title} icon`}
              />
              <div className={styles.aboutItemText}>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
