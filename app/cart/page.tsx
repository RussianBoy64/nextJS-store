import ProductList from "@/components/Cart/ProductList";
import styles from "./cartPage.module.scss";
import CartPrice from "@/components/Cart/CartPrice";

export const metadata = {
  title: "NextShop | Cart",
  description: "Online shop application created with NextJS",
};

const page = () => {
  return (
    <section className={styles.cart}>
      <h4 className={styles.cart__title}>Shopping cart</h4>
      <ProductList />
      <CartPrice />
    </section>
  );
};

export default page;
