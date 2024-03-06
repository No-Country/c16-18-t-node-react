import ProductsTable from "../components/Cart/ProductsTable";
import SearchBar from "../components/Cart/SearchBar";
import Summary from "../components/Cart/Summary";
import Discount from "../components/Cart/Discount";



const CartPage = () => {

  return (
    <section className="mb-5 w-full">
      <SearchBar />
      <div className="flex flex-col xl:flex-row content-center">
        <ProductsTable/>
        <Summary />
      </div>
      <Discount />
    </section>
  );
};

export default CartPage;
