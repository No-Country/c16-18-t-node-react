import { useEffect, useState } from "react";
import { useCart } from "../../stores/useCart";
import Counter from "./Counter";

const ProductRow = (props) => {
  const { product } = props;
  const productId = product._id;

  // const productInCart = cart.find(product => product._id === productId);

  // // Verificar si se encontró el producto
  // if (productInCart) {
  //     const amount = product.amount;
  //     console.log("La cantidad del producto es:", amount);
  //     return amount
  // } else {
  //     console.log("Producto no encontrado en el carrito.");
  // }

  const [count, setCount] = useState(product.amount);

  const { setSubtotal, deleteProductFromCart} = useCart();

  const productSubtotal = product.price * count;

  useEffect(() => {
    setSubtotal(productSubtotal, productId);
  }, [productSubtotal, setSubtotal, productId]);

  const handleDelete = () => {
    deleteProductFromCart(productId);
  };

  return (
    <>
      <tr className="w-11/12 h-28 justify-between items-center mx-5 my-3 hidden lg:flex">
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
            productId={product._id}
          />
        </td>
        <td className="pl-16">${productSubtotal}</td>
        <button onClick={handleDelete}>
          <img className="w-6 h-6" src="/cancel.svg" />
        </button>
      </tr>

      <tr className="w-11/12 flex justify-between content-start mx-5 my-3 lg:hidden">
        <td className="w-28 h-28 mr-3">
          <img className="w-24 h-24" src={product.image} />
        </td>
        <td className="flex flex-col content-between gap-3">
          <button onClick={handleDelete} className="flex justify-end">
            <img className="w-6 h-6" src="/cancel.svg" />
          </button>

          <p className="text-sm font-normal">{product.name}</p>

          <div className="flex gap-3 items-center justify-center">
            <Counter
              count={count}
              setCount={setCount}
              productSubtotal={productSubtotal}
              productId={productId}
            />
            <p>${productSubtotal}</p>
          </div>
        </td>
      </tr>
      <hr className="text-platinum mx-5" />
    </>
  );
};

export default ProductRow;