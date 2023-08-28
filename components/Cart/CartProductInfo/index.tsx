import styles from "./cartProductInfo.module.scss";

const CartProductInfo = () => {
  return (
    <div className={styles.productInfo}>
      <h4 className={styles.productInfo__title}>Shopping cart</h4>
      <div className={styles.productInfo__productList}>
        <span className={styles.productInfo__listHeader}>Product</span>
        <span className={styles.productInfo__listHeader}>Amount</span>
        <span className={styles.productInfo__listHeader}>Price()</span>
      </div>
    </div>
  );
};

export default CartProductInfo;
