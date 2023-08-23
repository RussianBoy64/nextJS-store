import { dehydrate, Hydrate } from "@tanstack/react-query";
import getQueryClient from "app/getQueryClient";
import PopularGoods from "@/components/PopularGoods";
import { getProducts, queryKey } from "api/getProducts";

export default async function HydratedPosts() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery([queryKey.products], getProducts);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <PopularGoods />
    </Hydrate>
  );
}
