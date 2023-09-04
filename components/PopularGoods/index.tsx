"use client";

import { fetchProductsByCategory, productsCategories } from "api/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import SwiperNavigation from "@/components/UI/SwiperNavigation";
import ProductCard from "@/components/productCard";

import "swiper/scss";
import styles from "./popularGoods.module.scss";

interface PopularGoodsProps {
  category: productsCategories;
}

const PopularGoods = ({ category }: PopularGoodsProps) => {
  const { data } = fetchProductsByCategory(category);

  return (
    <section className={styles.popularGoods}>
      <Swiper
        className={styles.popularGoods__swiper}
        modules={[A11y]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          490: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        onSlideChange={(swiper) => swiper.update()}
      >
        {data!.map((product) => (
          <SwiperSlide className={styles.popularGoods__card} key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}

        <SwiperNavigation />
      </Swiper>
    </section>
  );
};

export default PopularGoods;
