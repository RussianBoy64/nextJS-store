import { productsCategories } from "api/productsData";

import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";

const ManPage = () => {
  return <HydratedPopularGoods category={productsCategories.man} />;
};

export default ManPage;
