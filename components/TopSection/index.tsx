import Image from "next/image";
import promoImageSrc from "@/public/images/first_screen_content.jpg";
import { NavLink, NavLinkColors } from "@/components/UI/Links";

import styles from "./topSection.module.scss";

const TopSection = () => {
  return (
    <section className={styles.topSection}>
      <div className={[styles.topSection__promo, styles.promo].join(" ")}>
        <h1 className={styles.promo__title}>
          Summer women`s <br />
          <i className={styles.promo__accent}>Brand jeans</i>
          <span className={styles.promo__discount}>- 35%</span>
        </h1>

        <p className={styles.promo__brands}>
          Pull&Bear, H&M, Zara, Bershka, New Yorker, <br /> Reserved, Colin’s, Asos
        </p>

        <NavLink href="#" text="Shop now" color={NavLinkColors.light} />
      </div>
      <Image
        src={promoImageSrc}
        alt="promo image"
        width={950}
        height={510}
        priority={true}
        className={styles.topSection__image}
      />
    </section>
  );
};

export default TopSection;
