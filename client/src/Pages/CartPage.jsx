import ProductsTable from "../components/Cart/ProductsTable";
import SearchBar from "../components/Cart/SearchBar";
import Summary from "../components/Cart/Summary";
import Discount from "../components/Cart/Discount"

const CartPage = () => {
  return (
    <section>
      <SearchBar />
      <div className="flex">
        <ProductsTable />
        <Summary />
      </div>
      <Discount/>
    </section>
  );
};

export default CartPage;