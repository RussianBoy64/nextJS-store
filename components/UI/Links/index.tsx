import FavoriteLink from "@/components/UI/Links/FavoriteLink";
import ProfileLink from "@/components/UI/Links/ProfileLink";
import CartLink from "@/components/UI/Links/CartLink";
import NavLink from "@/components/UI/Links/NavLink";

export interface ProfileLinkProps {
  showName?: boolean;
}

export interface NavLinkProps {
  href: string;
  text: string;
  color: NavLinkColors;
}

export enum NavLinkColors {
  light,
  gray,
}

export { FavoriteLink, ProfileLink, CartLink, NavLink };
