import { useCart } from "../../stores/useCart";
import ProductRow from "./ProductRow";

const ProductsTable = () => {

  const {cart} = useCart();

  return (
    <div className=" mt-12 ml-16 border border-platinum rounded-lg">
    <table className="table-auto ">
      <thead className="font-normal text-sm text-gray border-b border-platinum ">
        <tr className="flex justify-between mx-5 mt-4 ">
          <th>PRODUCTO</th>
          <th className="flex justify-between gap-28">
          <span >PRECIO</span>
          <span >CANTIDAD</span>
          <span >SUBTOTAL</span>
          </th>

        </tr>
      </thead>
      <tbody>
        {cart.map((product) => {
          return <>
          <ProductRow key={product._id} product={product} />
          <hr className="text-platinum mx-5"/>
          </>
        })}
      </tbody>

      
    </table>
    <button className="h-11 w-48 bg-whiteSmoke rounded-full ms-5 my-4 font-poppins text-sm">
        Ver más productos
      </button>
    </div>

  );
};

export default ProductsTable;
