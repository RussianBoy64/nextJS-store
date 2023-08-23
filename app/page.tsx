import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";
import { productsCategories } from "api/productsData";

import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";

import styles from "./homePage.module.scss";

export const metadata = {
  title: "NextShop | Home",
  description: "Online shop application created with NextJS",
};

const Home = () => {
  return (
    <main className={styles.main}>
      <TopSection />
      <BrandFilter />
      <HydratedPopularGoods category={productsCategories.woman} />
    </main>
  );
};

export default Home;
