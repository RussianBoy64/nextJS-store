"use client";

import routes, { routesNames } from "routes";
import { Space } from "antd";
import Link from "next/link";
import Image from "next/image";
import AppStoreIcon from "public/apple_store.svg";
import GooglePlayIcon from "public/google_play.svg";

import styles from "./additional.module.scss";

const helpAndInfoLinks = [
  routes[routesNames.return],
  routes[routesNames.delivery],
  routes[routesNames.faq],
  routes[routesNames.contacts],
];

const cooperationLinks = [
  routes[routesNames.brand],
  routes[routesNames.media],
  routes[routesNames.about],
];

const downloadLinks = [
  { name: "App Store", path: "https://www.apple.com/ru/app-store/", src: AppStoreIcon },
  {
    name: "Google play",
    path: "https://play.google.com/store/games?hl=ru&gl=US",
    src: GooglePlayIcon,
  },
];

const Additional = () => {
  return (
    <Space className={styles.additional} align="start" size="large">
      <Space direction="vertical">
        <span className={styles.additional__title}>Help and info</span>

        {helpAndInfoLinks.map((link) => (
          <Link href={link.path} className={styles.additional__link}>
            {link.name}
          </Link>
        ))}
      </Space>

      <Space direction="vertical">
        <span className={styles.additional__title}>Cooperation</span>

        {cooperationLinks.map((link) => (
          <Link href={link.path} className={styles.additional__link}>
            {link.name}
          </Link>
        ))}
      </Space>

      <Space direction="vertical">
        <span className={styles.additional__title}>Download</span>

        {downloadLinks.map((link) => (
          <a
            href={link.path}
            target="blank"
            className={styles.additional__link}
            key={link.name}
          >
            <Image src={link.src} alt="store icon" />
          </a>
        ))}
      </Space>
    </Space>
  );
};

export default Additional;
