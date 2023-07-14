import TopSection from "@/components/TopSection";

import styles from "./homePage.module.scss";

export const metadata = {
  title: "NextShop | Home",
  description: "Online shop application created with NextJS",
};

const Home = () => {
  return (
    <main className={styles.main}>
      <TopSection />
    </main>
  );
};

export default Home;
