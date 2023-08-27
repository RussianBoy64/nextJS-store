"use client";

import { useState } from "react";
import { useSwiper } from "swiper/react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from "./swiperNavigation.module.scss";

const swiperNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevSlideHandler: () => void = () => {
    swiper.slidePrev();
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  const nextSlideHandler: () => void = () => {
    swiper.slideNext();
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <>
      {isBeginning ? (
        <button className={styles.prevButton} onClick={prevSlideHandler} disabled>
          <LeftOutlined />
        </button>
      ) : (
        <button className={styles.prevButton} onClick={prevSlideHandler}>
          <LeftOutlined />
        </button>
      )}

      {isEnd ? (
        <button className={styles.nextButton} onClick={nextSlideHandler} disabled>
          <RightOutlined />
        </button>
      ) : (
        <button className={styles.nextButton} onClick={nextSlideHandler}>
          <RightOutlined />
        </button>
      )}
    </>
  );
};

export default swiperNavigation;
