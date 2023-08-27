export enum routesNames {
  woman,
  man,
  jewelery,
  favorite,
  profile,
  cart,
  return,
  delivery,
  faq,
  contacts,
  brand,
  media,
  about,
  product,
}

export interface route {
  id: string;
  name: string;
  path: string;
}

const routes: route[] = [
  { id: "woman", name: "Woman", path: "/" },
  { id: "man", name: "Man", path: "/man" },
  { id: "jewelery", name: "Jewelery", path: "/jewelery" },
  { id: "favorite", name: "Favorite", path: "/favorite" },
  { id: "profile", name: "Profile", path: "/profile" },
  { id: "cart", name: "Cart", path: "/cart" },
  { id: "return", name: "Returns and complaints", path: "/return" },
  { id: "delivery", name: "Delivery & Payment", path: "/delivery" },
  { id: "faq", name: "FAQ", path: "/faq" },
  { id: "contacts", name: "Contacts", path: "/contacts" },
  { id: "brand", name: "Brand files", path: "/brand" },
  { id: "media", name: "Media", path: "/media" },
  { id: "about", name: "About shopping", path: "/about" },
  { id: "product", name: "Product", path: "/product" },
];

export default routes;
