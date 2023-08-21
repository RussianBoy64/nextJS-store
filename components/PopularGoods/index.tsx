"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import SwiperNavigation from "@/components/UI/SwiperNavigation";

import "swiper/scss";
import "swiper/scss/navigation";

import styles from "./popularGoods.module.scss";

const PopularGoods = () => {
  return (
    <section className={styles.popularGoods}>
      <Swiper
        className={styles.popularGoods__swiper}
        modules={[Navigation, A11y]}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        onSlideChange={(swiper) => swiper.update()}
      >
        <SwiperSlide className={styles.popularGoods__item}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.popularGoods__item}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.popularGoods__item}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.popularGoods__item}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.popularGoods__item}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.popularGoods__item}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.popularGoods__item}>Slide 4</SwiperSlide>
        <SwiperNavigation />
      </Swiper>
    </section>
  );
};

export default PopularGoods;
