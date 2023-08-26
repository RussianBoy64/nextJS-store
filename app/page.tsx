import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";
import { productsCategories } from "api/productsData";

import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";
import Inspiration from "@/components/Inspiration";

import insparationWomanImg from "@/public/images/inspirationWoman.png";
import insparationBackImg from "@/public/images/inspirationBack.png";

import styles from "./homePage.module.scss";

export const metadata = {
  title: "NextShop | Women`s clothing",
  description: "Online shop application created with NextJS",
};

const Home = () => {
  return (
    <main className={styles.main}>
      <TopSection />
      <BrandFilter />
      <HydratedPopularGoods category={productsCategories.woman} />
      <Inspiration backImage={insparationBackImg} primaryImage={insparationWomanImg} />
    </main>
  );
};

export default Home;
