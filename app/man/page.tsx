import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";
import { productsCategories } from "api/productsData";

import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";
import Inspiration from "@/components/Inspiration";

import insparationManImg from "@/public/images/inspirationMan.jpg";
import insparationBackImg from "@/public/images/inspirationBack.png";

import styles from "./manPage.module.scss";

export const metadata = {
  title: "NextShop | Men`s clothing",
  description: "Online shop application created with NextJS",
};

const ManPage = () => {
  return (
    <main className={styles.main}>
      <TopSection />
      <BrandFilter />
      <HydratedPopularGoods category={productsCategories.man} />
      <Inspiration backImage={insparationBackImg} primaryImage={insparationManImg} />
    </main>
  );
};

export default ManPage;
