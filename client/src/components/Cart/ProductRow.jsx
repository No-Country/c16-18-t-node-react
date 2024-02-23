import { useState } from "react";
import { useCart } from "../../stores/useCart";
import Counter from "./Counter";
import { useEffect } from "react";

const ProductRow = (props) => {
  const { product } = props;

  const productSku = product.sku;
  const { setAmount } = useCart();

  const [count, setCount] = useState(0);

  useEffect(() => {
    setAmount(productSku, count);
  }, [count, setAmount]);

  const context = "ProductRow";
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
        context={context}
        product={product}
        productSku={productSku}
        />
      </td>
      <td className="pl-16">${product.price}</td>
      <img className="w-6 h-6" src="/cancel.svg"/>
    </tr>
  );
};

export default ProductRow;
