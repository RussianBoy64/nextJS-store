import { Product } from "api/productsData";

import HydratedProduct from "@/components/Product/hydratedProduct";

export const metadata = {
  title: "NextShop | Men`s clothing",
  description: "Online shop application created with NextJS",
};

interface ProductPageProps {
  params: Pick<Product, "id">;
}

const ProductPage = ({ params }: ProductPageProps) => {
  return <HydratedProduct id={params.id} />;
};

export default ProductPage;
