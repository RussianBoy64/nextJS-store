import { dehydrate, Hydrate } from "@tanstack/react-query";
import PopularGoods from "@/components/PopularGoods";
import { prefetchProductsByCategory, productsCategories } from "api/productsData";

interface HydratedPopularGoodsProps {
  category: productsCategories;
}

export default async function HydratedPopularGoods({
  category,
}: HydratedPopularGoodsProps) {
  const queryClient = await prefetchProductsByCategory(category);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PopularGoods category={category} />
    </Hydrate>
  );
}
