export enum routesNames {
  home,
  woman,
  man,
  jewelry,
  favorite,
  profile,
  cart,
}

export interface route {
  id: string;
  name: string;
  path: string;
}

const routes: route[] = [
  { id: "home", name: "Home", path: "/" },
  { id: "woman", name: "Woman", path: "/woman" },
  { id: "man", name: "Man", path: "/man" },
  { id: "jewelry", name: "Jewelry", path: "/jewelry" },
  { id: "favorite", name: "Favorite", path: "/favorite" },
  { id: "profile", name: "Profile", path: "/profile" },
  { id: "cart", name: "Cart", path: "/cart" },
];

export default routes;
