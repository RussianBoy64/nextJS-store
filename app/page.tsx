import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";
import { productsCategories } from "api/productsData";

import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";
import Inspiration from "@/components/Inspiration";

import insparationPrimaryImg from "@/public/images/inspiration2.png";
import insparationSecondaryImg from "@/public/images/inspiration1.png";

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
      <Inspiration
        primaryImage={insparationPrimaryImg}
        secondaryImage={insparationSecondaryImg}
      />
    </main>
  );
};

export default Home;
