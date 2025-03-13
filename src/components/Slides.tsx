import React, { useState } from "react";
import styles from "../styles/modules/components/Slides.module.scss";

interface SlidesProps {
  slideList: { title?: string; content?: string; img?: string }[];
}

const Slides: React.FC<SlidesProps> = ({ slideList }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(Math.round(slideList.length / 2));
  const [animationClass, setAnimationClass] = useState("");

  const nextSlide = () => {
    setAnimationClass(styles.next);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % slideList.length);
      setAnimationClass("");
    }, 600);
  };

  const prevSlide = () => {
    setAnimationClass(styles.prev);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + slideList.length) % slideList.length);
      setAnimationClass("");
    }, 600);
  };

  const orderedSlides = [
    slideList[(currentIndex - 1 + slideList.length) % slideList.length], // Slide bên trái
    slideList[currentIndex], // Slide chính giữa
    slideList[(currentIndex + 1) % slideList.length], // Slide bên phải
  ];

  return (
    <div className={styles["slider-container"]}>
      <button className={`${styles.button} ${styles.prev}`} onClick={prevSlide}>
        {"<"}
      </button>
      <div className={styles["slide-wrapper"]}>
        {orderedSlides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === 1 ? styles.active : ""} ${animationClass}`}
          >
            <img className={styles.img} src={slide.img} alt="slide-img" />
          </div>
        ))}
      </div>
      <button className={`${styles.button} ${styles.next}`} onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Slides;
