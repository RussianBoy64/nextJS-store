"use client";

import Logo from "@/components/Logo";
import { Space } from "antd";
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from "@ant-design/icons";

import styles from "./socials.module.scss";

interface Isocial {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const socials: Isocial[] = [
  {
    name: "Instagram",
    path: "https://www.instagram.com",
    icon: <InstagramOutlined />,
  },
  {
    name: "Facebook",
    path: "https://ru-ru.facebook.com/",
    icon: <FacebookOutlined />,
  },
  {
    name: "Twitter",
    path: "https://twitter.com/?lang=ru",
    icon: <TwitterOutlined />,
  },
];

const Socials = () => {
  return (
    <div className={styles.socials}>
      <Logo />
      <Space size="large" className={styles.socials__list}>
        {socials.map((social) => (
          <a href={social.path} target="blank" key={social.name}>
            {social.icon}
          </a>
        ))}
      </Space>
    </div>
  );
};

export default Socials;
