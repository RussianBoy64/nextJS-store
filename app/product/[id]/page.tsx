import { Product } from "api/productsData";

export const metadata = {
  title: "NextShop | Men`s clothing",
  description: "Online shop application created with NextJS",
};

interface ProductPageProps {
  params: Pick<Product, "id">;
}

const ProductPage = ({ params }: ProductPageProps) => {
  return <div>{params.id}</div>;
};

export default ProductPage;
