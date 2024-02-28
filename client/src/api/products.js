const API_URL = import.meta.env.VITE_API_URL;

export const getProductsFn = async () => {
  const res = await fetch(`${API_URL}/api/products`);

  if (!res.ok) {
    throw new Error("An error occurred while getting the products");
  }

  const data = await res.json();
  return data;
};