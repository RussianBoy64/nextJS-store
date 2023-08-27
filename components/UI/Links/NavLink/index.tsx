"use client";

import Link from "next/link";
import { NavLinkColors, NavLinkProps } from "@/components/UI/Links/";
import { ArrowRightOutlined } from "@ant-design/icons";

import styles from "@/components/UI/Links/link.module.scss";

const getNavlinkColor = (color: NavLinkColors) => {
  const linkStyles = [styles.link, styles.navlink];

  switch (color) {
    case NavLinkColors.light:
      linkStyles.push(styles.navlink_light);
      break;
    case NavLinkColors.gray:
      linkStyles.push(styles.navlink_gray);
      break;
    default:
      linkStyles.push(styles.navlink_purple);
      break;
  }

  return linkStyles.join(" ");
};

const NavLink = ({ href, text, color }: NavLinkProps) => {
  const linkStyles = getNavlinkColor(color);

  return (
    <Link href={href} className={linkStyles}>
      {text}
      <ArrowRightOutlined className={styles.navlink__arrow} />
    </Link>
  );
};

export default NavLink;
