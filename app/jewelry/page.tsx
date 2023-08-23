import { productsCategories } from "api/productsData";

import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";

const Jewelry = () => {
  return <HydratedPopularGoods category={productsCategories.jewelery} />;
};

export default Jewelry;
