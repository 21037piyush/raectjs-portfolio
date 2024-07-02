import React, { useEffect } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
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
        threshold: 0.1,
      }
    );

    const heroSection = document.querySelector(`.${styles.container}`);
    observer.observe(heroSection);

    return () => {
      observer.unobserve(heroSection);
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm PIYUSH DAS</h1>
        <p className={styles.description}>
          Hi, I am a UI/UX Designer and Full Stack Developer skilled in Java, React JS, and passionate about learning AI and ML technologies.
        </p>
        <a href="mailto:piyushdas1803@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
