export enum queryKey {
  products = "products",
}

export const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
};
