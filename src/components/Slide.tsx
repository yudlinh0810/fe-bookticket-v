import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/modules/components/Slide.module.scss";

export interface SlideDataType {
  title?: string;
  content?: string;
  image: string;
}

interface SlideProps {
  data: SlideDataType[];
}

const Slide: React.FC<SlideProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = (index: number) => {
    setCurrentSlide(index >= data.length ? 0 : index);
    resetInterval();
  };

  const autoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data.length);
    }, 4000);
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    autoSlide();
  };

  useEffect(() => {
    autoSlide();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className={styles["slider-container"]}>
      <div className={`${styles.slides} ${styles[`slide-${currentSlide}`]}`}>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <img src={slide.image} alt={`banner-${index}`} className="img" />
            </div>
          ))
        ) : (
          <p>Không có dữ liệu</p>
        )}
      </div>
      <div className={styles["slider-dots"]}>
        {Array.isArray(data) &&
          data.length > 0 &&
          data.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentSlide === index ? styles.active : ""}`}
              onClick={() => nextSlide(index)}
            ></span>
          ))}
      </div>
    </section>
  );
};

export default Slide;
