"use client";

import { Space, Button } from "antd";
import Link from "next/link";
import brands from "brands";
import Image from "next/image";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import styles from "./brandFilter.module.scss";

const BrandFilter = () => {
  return (
    <section className={styles.brandFilter}>
      <Space size="large" className={styles.brandFilter__list}>
        <Button
          className={styles.brandFilter__buttonPrev}
          shape="circle"
          icon={<LeftOutlined />}
        />

        {brands.map((brand) => {
          return (
            <Link
              className={styles.brandFilter__link}
              href={brand.src}
              title={brand.name}
              key={brand.id}
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                className={styles.brandFilter__logo}
              />
            </Link>
          );
        })}
        <Button
          className={styles.brandFilter__buttonNext}
          shape="circle"
          icon={<RightOutlined />}
        />
      </Space>
    </section>
  );
};

export default BrandFilter;
