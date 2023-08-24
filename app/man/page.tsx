import { productsCategories } from "api/productsData";

import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";

export const metadata = {
  title: "NextShop | Men`s clothing",
  description: "Online shop application created with NextJS",
};

const ManPage = () => {
  return <HydratedPopularGoods category={productsCategories.man} />;
};

export default ManPage;
