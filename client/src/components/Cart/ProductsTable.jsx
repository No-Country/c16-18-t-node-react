import { useNavigate } from "react-router-dom";
import ProductRow from "./ProductRow";
const ProductsTable = () => {
  // const userId = user.id;
  const cartLS = JSON.parse(localStorage.getItem("cart")) || null;

  const navigate = useNavigate();

  const redirecction = () => {
    navigate("/results");
  }

  const emptyCart = [];
  return (
    <div className="w-5/6 lg:w-11/12 mt-12 mx-8 sm:ml-16 border border-platinum rounded-lg">
      <table className="w-full">
        <thead className="font-normal text-sm text-gray border-b border-platinum hidden lg:block">
          <tr className="flex justify-between mx-5 mt-4">
            <th>PRODUCTO</th>
            <th className="flex justify-between gap-28">
              <span>PRECIO</span>
              <span>CANTIDAD</span>
              <span>SUBTOTAL</span>
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {cartLS
            ? cartLS.map((product) => {
                return <ProductRow key={product._id} product={product} />;
              })
            : emptyCart.map((product) => {
                return <ProductRow key={product._id} product={product} />;
              })}
        </tbody>
        <tfoot>
          <tr className="text-center">
            <td colSpan="4">
              <button className="h-11 w-48 bg-whiteSmoke rounded-full font-poppins text-sm my-4 hover:bg-grayishGreen3" onClick={redirecction}>
                Ver más productos
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsTable;
