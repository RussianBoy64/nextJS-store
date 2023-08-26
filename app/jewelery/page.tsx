import HydratedPopularGoods from "@/components/PopularGoods/hydratedPopularGoods";
import { productsCategories } from "api/productsData";

import TopSection from "@/components/TopSection";
import BrandFilter from "@/components/BrandFilter";
import Inspiration from "@/components/Inspiration";

import insparationWomanImg from "@/public/images/inspirationJewelery.jpg";
import insparationBackImg from "@/public/images/inspirationBack.png";

export const metadata = {
  title: "NextShop | Jewelery",
  description: "Online shop application created with NextJS",
};

const Jewelry = () => {
  return (
    <>
      <TopSection />
      <BrandFilter />
      <HydratedPopularGoods category={productsCategories.jewelery} />
      <Inspiration backImage={insparationBackImg} primaryImage={insparationWomanImg} />
    </>
  );
};

export default Jewelry;
