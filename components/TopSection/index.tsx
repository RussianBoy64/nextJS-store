"use client";

import Image, { StaticImageData } from "next/image";
import { NavLink, NavLinkColors } from "@/components/UI/Links";
import { usePathname } from "next/navigation";

import promoWomanImage from "@/public/images/topSectionWoman.jpg";
import promoManImage from "@/public/images/topSectionMan.webp";
import promojeweleryImage from "@/public/images/topSectionJewelery.webp";

import styles from "./topSection.module.scss";
import routes, { routesNames } from "routes";

interface ITopSectionContent {
  [key: string]: {
    title: string;
    accent: string;
    discount: string;
    image: StaticImageData;
  };
}

const topSectionContent: ITopSectionContent = {
  woman: {
    title: "Summer women`s",
    accent: "Brand jeans",
    discount: "- 35%",
    image: promoWomanImage,
  },
  man: {
    title: "Summer men`s",
    accent: "Brand jeans",
    discount: "- 45%",
    image: promoManImage,
  },
  jewelery: {
    title: "Summer diamonds`s",
    accent: "Unique rings",
    discount: "- 55%",
    image: promojeweleryImage,
  },
};

function getTopSectionContent(pathname: string) {
  switch (pathname) {
    case routes[routesNames.man].path:
      return topSectionContent[routes[routesNames.man].id as keyof ITopSectionContent];

    case routes[routesNames.jewelery].path:
      return topSectionContent[
        routes[routesNames.jewelery].id as keyof ITopSectionContent
      ];

    default:
      return topSectionContent[routes[routesNames.woman].id as keyof ITopSectionContent];
  }
}

const TopSection = () => {
  const pathname = usePathname();
  const content = getTopSectionContent(pathname);

  return (
    <section className={styles.topSection}>
      <div className={[styles.topSection__promo, styles.promo].join(" ")}>
        <h1 className={styles.promo__title}>
          {content.title}
          <br />
          <i className={styles.promo__accent}>{content.accent}</i>
          <span className={styles.promo__discount}>{content.discount}</span>
        </h1>

        <p className={styles.promo__brands}>
          Pull&Bear, H&M, Zara, Bershka, New Yorker, <br /> Reserved, Colin’s, Asos
        </p>

        <NavLink href="#" text="Shop now" color={NavLinkColors.light} />
      </div>
      <Image
        src={content.image}
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
