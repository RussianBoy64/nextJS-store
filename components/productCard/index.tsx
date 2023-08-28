import { Product } from "api/productsData";
import routes, { routesNames } from "routes";
import { useUserStore } from "@/store/userStore";
import { buttonTypes } from "settings/themeSettings";
import useStore from "@/hooks/useStore";
import { useSettingsStore } from "@/store/settingsStore";
import { useCartStore } from "@/store/cartStore";
import currency from "settings/currencySettings";

import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./productCard.module.scss";

interface PopularGoodsCardProps {
  product: Product;
}

const ProductCard = ({ product }: PopularGoodsCardProps) => {
  const favoriteProductList = useStore(useUserStore, (state) => state.favoriteProduct);
  const productsIdInCart = useStore(useCartStore, (state) => state.productId);
  const currentCurrency = useStore(useSettingsStore, (state) => state.currensy);
  const [addProductToFavorite, removeProductFromFavorite] = useUserStore((state) => [
    state.addProductToFavorite,
    state.removeProductFromFavorite,
  ]);
  const [addProductToCart, removeProductFromCart] = useCartStore((state) => [
    state.addProductToCart,
    state.removeProductFromCart,
  ]);
  const isProductInFavorites = favoriteProductList?.includes(product.id);
  const isProductInCart = productsIdInCart?.includes(product.id);

  const productRoute = `${routes[routesNames.product].path}/${product.id}`;

  const productPrice = currentCurrency
    ? currency[currentCurrency].getPrice(product.price)
    : product.price;
  const productSign = currentCurrency ? currency[currentCurrency].sign : "$";

  const favoriteClickHander = (event: React.MouseEvent) => {
    event.preventDefault();

    if (isProductInFavorites) {
      removeProductFromFavorite(product.id);
    } else {
      addProductToFavorite(product.id);
    }
  };

  const cartClickHadnler = (event: React.MouseEvent) => {
    event.preventDefault();

    if (isProductInCart) {
      removeProductFromCart(product);
    } else {
      const productToAdd = {
        ...product,
        amount: 1,
      };
      addProductToCart(productToAdd);
    }
  };

  return (
    <Link className={styles.card} href={productRoute}>
      <div className={styles.card__imageWrapper}>
        <Image
          className={styles.card__image}
          src={product.image}
          alt={product.title}
          width={398}
          height={604}
        />
        <Button
          className={styles.card__favorite}
          type={buttonTypes.default}
          icon={isProductInFavorites ? <HeartFilled /> : <HeartOutlined />}
          onClick={favoriteClickHander}
        />
        <Button
          className={[
            styles.card__cart,
            isProductInCart ? styles.card__cart_secondary : styles.card__cart_primary,
          ].join(" ")}
          type={buttonTypes.primary}
          icon={<ShoppingCartOutlined />}
          onClick={cartClickHadnler}
        >
          {isProductInCart ? "Remove" : "Add"}
        </Button>
      </div>

      <div className={styles.card__info}>
        <span className={styles.card__category}>{product.category}</span>
        <span className={styles.card__title}>{product.title}</span>
        <span className={styles.card__price}>{`${productPrice}${productSign}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
