import { useEffect, useState } from "react";
import { useCart } from "../../stores/useCart";
import Counter from "./Counter";

const ProductRow = (props) => {
  const { product } = props;
  const productId = product._id;

  const [count, setCount] = useState(1);

  const { setSubtotal, deleteProductFromCart } = useCart();

  const productSubtotal = product.price * count;

  useEffect(() => {
    setSubtotal(productSubtotal, productId)
  }, [productSubtotal, setSubtotal, productId]);


  const handleDelete = () => {
    deleteProductFromCart(productId);
    
  };

  return (
    <tr className="w-[832px] h-28 flex justify-between items-center mx-5 my-3">
      <td className="w-80 h-28 flex gap-3 justify-start items-center">
        <img className="w-28 h-28" src={product.image} />
        <p className="text-base font-normal">{product.name}</p>
      </td>
      <td className="pl-14">${product.price}</td>
      <td className="pl-16">
        <Counter
          count={count}
          setCount={setCount}
          productSubtotal={productSubtotal}
        />
      </td>
      <td className="pl-16">
        ${productSubtotal}
      </td>
      <button onClick={handleDelete}>
        <img className="w-6 h-6" src="/cancel.svg" />
      </button>
    </tr>
  );
};

export default ProductRow;
