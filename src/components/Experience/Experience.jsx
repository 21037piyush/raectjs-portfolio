import React, { useEffect } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    const elementsToAnimate = document.querySelectorAll(
      `.${styles.skill}, .${styles.historyItem}`
    );
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      elementsToAnimate.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map(({ title, imageSrc }, index) => (
            <div key={index} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(imageSrc)} alt={title} />
              </div>
              <p>{title}</p>
            </div>
          ))}
        </div>
        <ul className={styles.history}>
          {history.map(
            ({ role, organisation, startDate, endDate, experiences, imageSrc }, index) => (
              <li key={index} className={styles.historyItem}>
                <img src={getImageUrl(imageSrc)} alt={`${organisation} Logo`} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${role}, ${organisation}`}</h3>
                  <p>{`${startDate} - ${endDate}`}</p>
                  <ul>
                    {experiences.map((experience, expIndex) => (
                      <li key={expIndex}>{experience}</li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};
