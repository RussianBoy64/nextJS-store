"use client";

import Link from "next/link";
import routes, { routesNames } from "routes";

import { UserOutlined } from "@ant-design/icons";
import { ProfileLinkProps } from "@/components/UI/Links";

import styles from "@/components/UI/Links/link.module.scss";

const ProfileLink = ({ showName = false, clickHandler }: ProfileLinkProps) => {
  return (
    <>
      {showName ? (
        <Link
          href={routes[routesNames.profile].path}
          className={styles.link}
          onClick={clickHandler}
        >
          <UserOutlined />
          {routes[routesNames.profile].name}
        </Link>
      ) : (
        <Link href={routes[routesNames.profile].path} className={styles.link}>
          <UserOutlined />
        </Link>
      )}
    </>
  );
};

export default ProfileLink;
