import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";
import { productsCategories } from "api/productsData";

import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";
import Inspiration from "@/components/Inspiration";

import insparationWomanImg from "@/public/images/inspirationJewelery.jpg";
import insparationBackImg from "@/public/images/inspirationBack.png";

import styles from "./jeweleryPage.module.scss";

export const metadata = {
  title: "NextShop | Jewelery",
  description: "Online shop application created with NextJS",
};

const Jewelry = () => {
  return (
    <main className={styles.main}>
      <TopSection />
      <BrandFilter />
      <HydratedPopularGoods category={productsCategories.woman} />
      <Inspiration backImage={insparationBackImg} primaryImage={insparationWomanImg} />
    </main>
  );
};

export default Jewelry;
