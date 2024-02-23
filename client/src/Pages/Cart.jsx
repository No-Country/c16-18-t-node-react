import ProductsTable from "../components/Cart/ProductsTable";
import SearchBar from "../components/Cart/SearchBar";
import Summary from "../components/Cart/Summary";
import Discount from "../components/Cart/Discount";
import { useCart } from "../stores/useCart";
import { useQuery } from "@tanstack/react-query";
import { getProductsFn } from "../api/products";
import { useEffect } from "react";

const Cart = () => {
  const { productsCart } = useCart();

  const orderQuantity = productsCart.length;

  const {
    data: cart,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["products"], queryFn: getProductsFn });
  useEffect(() => {
    if (!isLoading) {
      Swal.close();
    }
  }, [isLoading]);

  if (isError) {
    return (
      <>
        <div className="m-5">
          <div className="alert alert-danger">
            An error occurred while getting the products.
          </div>
        </div>
      </>
    );
  }
  return (
    <section>
      <SearchBar />
      <div className="flex">
        <ProductsTable cart={cart} />
        <Summary />
      </div>
      <Discount />
    </section>
  );
};

export default Cart;
