import { clsx } from "clsx";
import { useCart } from "../stores/useCart";
import { useState, useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";

const ProductCard = ({
  product,
  category,
  image,
  rating,
  price,
  name,
  modalHandler,
}) => {
  const { user } = useContext(AuthContext);
  const { setCart, deleteProductFromCart } = useCart();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setCart(product);
    setAddedToCart(true);
  };

  const handleRemoveFromCart = () => {
    deleteProductFromCart(product._id);
    setAddedToCart(false);
  };

  return (
    <>
      <div className="w-56 h-96 sm:w-[298px] sm:h-[466px] rounded-2xl border border-gray-300 overflow-hidden">
        <div className="w-full h-[31px] flex justify-start ">
          <div
            className={clsx(
              "w-24 sm:w-[64.5px]  flex justify-center items-center  rounded-br-[20px]",
              {
                "bg-greenLabel": category === "Sin TACC",
                "bg-redLabel":
                  category === "Vegano" || category === "Sin azúcar",
                "bg-orangeLabel": category === "Keto",
                "bg-blueLabel": category === "Orgánico",
              }
            )}
          >
            <p className="text-xs text-white text-center">{category}</p>
          </div>
        </div>
        <div className="w-full h-72 sm:h-[435px] flex flex-col justify-between pt-1 pb-8 items-center px-5">
          <div className="w-[246px h-[246px] rounded-lg px-2">
            <img
              className="cursor-pointer"
              src={image}
              alt=" "
              onClick={() => {
                modalHandler();
              }}
            />
          </div>
          <div className="w-full flex flex-col items-center gap-1">
            <div className="w-full flex flex-col items-start  gap-0">
              <h3 className="text-[15px] text-darkGreen1 font-normal leading-6">
                {name}
              </h3>
              <div className="w-full flex">
                <span className="text-[14px]">⭐⭐⭐⭐</span>
                <span className="font-normal text-sm text-gray-400">
                  ({rating})
                </span>
              </div>
            </div>
            <div className="w-full items-start">
              <p className="text-[18px] text-black font-bold ">${price}</p>
            </div>
            {user && user.rol === "Vendedor" ? null : (
              <button
                onClick={
                  addedToCart
                    ? () => handleRemoveFromCart()
                    : () => handleAddToCart()
                }
                className={`flex items-center justify-center w-[148px] h-[36px]  rounded-[4px] ${
                  addedToCart
                    ? "bg-yellowGreen text-black"
                    : "bg-avocadoGreen text-white"
                }`}
              >
                {addedToCart ? (
                  <img src="/check.svg" />
                ) : (
                  <img src="/button-cart.svg" />
                )}
                <p className="px-1 text-sm">
                  {addedToCart ? "Agregado" : "Agregar al carrito"}
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
