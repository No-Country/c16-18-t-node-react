import cart from "../../constants/Cart";
import ProductRow from "./ProductRow";

const ProductsTable = () => {
  return (
    <div className=" mt-12 ml-16 border border-platinum rounded-lg">
    <table className="table-auto ">
      <thead className="font-normal text-sm text-gray border-b border-platinum ">
        <tr className="flex justify-between mx-5 mt-4">
          <th>PRODUCTO</th>
          <div className="flex justify-between gap-28">
          <th>PRECIO</th>
          <th>CANTIDAD</th>
          <th>SUBTOTAL</th>
          </div>

        </tr>
      </thead>
      <tbody>
        {cart.map((product) => {
          return <>
          <ProductRow key={product.id} product={product} />
          <hr className="text-platinum mx-5"/>
          </>
        })}
      </tbody>

      <button className="h-11 w-48 bg-whiteSmoke rounded-full ms-5 my-4 font-poppins text-sm font-semibold leading-4">
        Ver más productos
      </button>
    </table>
    </div>

  );
};

export default ProductsTable;