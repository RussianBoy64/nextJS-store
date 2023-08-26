import FavoriteProductsList from "@/components/FavoriteProductsList";

import styles from "./favoritePage.module.scss";

export const metadata = {
  title: "NextShop | Favorite",
  description: "Products that you like",
};

const FavoritePage = () => {
  return (
    <section className={styles.favoritePage}>
      <h2 className={styles.favoritePage__title}>Favorite</h2>
      <FavoriteProductsList />
    </section>
  );
};

export default FavoritePage;
