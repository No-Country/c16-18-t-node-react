import ProductsTable from "../components/Cart/ProductsTable";
import SearchBar from "../components/Cart/SearchBar";
import Summary from "../components/Cart/Summary";
import Discount from "../components/Cart/Discount";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";


const CartPage = () => {

  const { user } = useContext(AuthContext);

  const userId = user ? user.id || null : null;

  localStorage.setItem('userId', userId);



  return (
    <section className="mb-5 w-full">
      <SearchBar />
      <div className="flex flex-col xl:flex-row content-center">
        <ProductsTable userId={userId} />
        <Summary />
      </div>
      <Discount />
    </section>
  );
};

export default CartPage;
