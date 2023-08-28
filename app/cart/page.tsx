import CartProductInfo from "@/components/Cart/CartProductInfo";
import styles from "./cartPage.module.scss";

export const metadata = {
  title: "NextShop | Cart",
  description: "Online shop application created with NextJS",
};

const page = () => {
  return (
    <section className={styles.cart}>
      <CartProductInfo />
    </section>
  );
};

export default page;
