"use client";

import { useQuery } from "@tanstack/react-query";
import {
  Product,
  fetchProductsByCategory,
  getAllProducts,
  productsCategories,
  queryKey,
} from "api/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import SwiperNavigation from "@/components/UI/SwiperNavigation";
import Image from "next/image";

import "swiper/scss";
import styles from "./popularGoods.module.scss";

interface PopularGoodsProps {
  category: productsCategories;
}

const PopularGoods = ({ category }: PopularGoodsProps) => {
  // const { data } = useQuery<Product[]>({
  //   queryKey: [queryKey.products],
  //   queryFn: getAllProducts,
  // });

  const { data } = fetchProductsByCategory(category);

  // const productsData = data?.filter(
  //   (product) => product.category !== productsCategories.electronics
  // );

  console.log(data);

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
        {data?.map((product) => (
          <SwiperSlide className={styles.popularGoods__item} key={product.id}>
            <Image src={product.image} alt={product.title} width={398} height={604} />
            {product.title}
          </SwiperSlide>
        ))}

        <SwiperNavigation />
      </Swiper>
    </section>
  );
};

export default PopularGoods;
