import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";
import PopularGoods from "@/components/PopularGoods";

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
      <PopularGoods />
    </main>
  );
};

export default Home;
