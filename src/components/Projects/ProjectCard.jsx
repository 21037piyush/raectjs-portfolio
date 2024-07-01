import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      {/* Display project image */}
      <img
        src={getImageUrl(imageSrc)}  // Assuming getImageUrl is a utility function to format image URLs
        alt={`Image of ${title}`}
        className={styles.image}
      />

      {/* Project title */}
      <h3 className={styles.title}>{title}</h3>

      {/* Project description */}
      <p className={styles.description}>{description}</p>

      {/* List of skills */}
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      {/* Links to demo and source code */}
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
