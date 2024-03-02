/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohit</h1>
        <p className={styles.description}>
          A good learner and regular practitioner of exploring new things.
        </p>
        <a
          href="https://drive.google.com/file/d/1gmZBs7107IS7Czi3Aj9psIPOkR8vhUWr/view"
          className={styles.contactBtn}
        >
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/mohit.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
