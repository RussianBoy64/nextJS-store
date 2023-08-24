import { productsCategories } from "api/productsData";

import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";

export const metadata = {
  title: "NextShop | Jewelery",
  description: "Online shop application created with NextJS",
};

const Jewelry = () => {
  return <HydratedPopularGoods category={productsCategories.jewelery} />;
};

export default Jewelry;
