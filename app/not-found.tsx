"use client";

import routes, { routesNames } from "routes";

import { Result } from "antd";
import { NavLink, NavLinkColors } from "@/components/UI/Links";

const NotFound = () => {
  const homePath = routes[routesNames.woman].path;

  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<NavLink href={homePath} text="Home" color={NavLinkColors.purple} />}
    />
  );
};

export default NotFound;
