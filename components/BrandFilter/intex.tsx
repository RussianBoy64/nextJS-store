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
        <Button shape="circle" icon={<LeftOutlined />} />

        {brands.map((brand) => {
          return (
            <Link
              href={brand.src}
              title={brand.name}
              key={brand.id}
              className={styles.brandFilter__link}
            >
              <Image
                src={brand.logo}
                alt={brand.alt}
                className={styles.brandFilter__logo}
              />
            </Link>
          );
        })}
        <Button shape="circle" icon={<RightOutlined />} />
      </Space>
    </section>
  );
};

export default BrandFilter;
