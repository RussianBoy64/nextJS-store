import { Product } from "api/productsData";
import routes, { routesNames } from "routes";
import { buttonTypes } from "settings/themeSettings";

import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import { HeartOutlined, HeartFilled, ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./popularGoodsCard.module.scss";

interface PopularGoodsCardProps {
  product: Product;
}

const PopularGoodsCard = ({ product }: PopularGoodsCardProps) => {
  const productRoute = `${routes[routesNames.product].path}/${product.id}`;

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
          icon={<HeartOutlined />}
          onClick={(event) => {
            event.stopPropagation();
            alert("add to favorite");
          }}
        />
        <Button
          className={styles.card__cart}
          type={buttonTypes.primary}
          icon={<ShoppingCartOutlined />}
          onClick={(event) => {
            event.stopPropagation();
            alert("add to cart");
          }}
        >
          Add
        </Button>
      </div>

      <div className={styles.card__info}>
        <span className={styles.card__category}>{product.category}</span>
        <span className={styles.card__title}>{product.title}</span>
        <span className={styles.card__price}>{`${product.price}$`}</span>
      </div>
    </Link>
  );
};

export default PopularGoodsCard;
