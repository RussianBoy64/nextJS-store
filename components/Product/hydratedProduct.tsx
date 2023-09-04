import { dehydrate, Hydrate } from "@tanstack/react-query";
import { prefetchProductsById } from "api/productsData";

import Product from ".";

interface HydratedProductProps {
  id: number;
}

export default async function HydratedProduct({ id }: HydratedProductProps) {
  const queryClient = await prefetchProductsById(id);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <Product id={id} />
    </Hydrate>
  );
}
