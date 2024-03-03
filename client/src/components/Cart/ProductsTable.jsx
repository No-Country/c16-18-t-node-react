import { useCart } from "../../stores/useCart";
import ProductRow from "./ProductRow";

const ProductsTable = () => {
  const { cart } = useCart();

  const cartLS = JSON.parse(localStorage.getItem('cart'));

  return (

    <div className="w-5/6 lg:w-11/12 mt-12 mx-8 sm:ml-16 border border-platinum rounded-lg">
      <table className="w-full">
        <thead className="font-normal text-sm text-gray border-b border-platinum hidden lg:block">
          <tr className="flex justify-between mx-5 mt-4">
            <th>PRODUCTO</th>
            <div className="flex justify-between gap-28">
              <th>PRECIO</th>
              <th>CANTIDAD</th>
              <th>SUBTOTAL</th>
            </div>
          </tr>
        </thead>
        <tbody className="w-full">
          {cartLS? cartLS.cart.map((product) => {
            return <ProductRow key={product._id} product={product} />;
          }): cart.map((product) => {
            return <ProductRow key={product._id} product={product} />;
          }) }
          <tr className="text-center">
            <td colSpan="4">
              <button className="h-11 w-48 bg-whiteSmoke rounded-full font-poppins text-sm my-4">
                Ver más productos
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
