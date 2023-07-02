import Link from "next/link";
import routes, { routesNames } from "routes";

import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <Link href={routes[routesNames.home].path}>
      <span className={styles.logo}>NextShop</span>
    </Link>
  );
};

export default Logo;
