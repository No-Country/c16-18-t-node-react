import { useCart } from "../stores/useCart";
import { useState } from "react";

const ProductCard = ({ product, category, image, rating, price, name, modalHandler}) => {
  
  
  const {setCart, deleteProductFromCart} = useCart();

  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () =>{
    setCart(product);
    setAddedToCart(true);
  };

  const handleRemoveFromCart = () =>{
    deleteProductFromCart(product._id);
    setAddedToCart(false)
  }


  return (
    <>
    <div className="relative border-[1px] border-grayishGreen4 rounded-2xl overflow-hidden">
      <p className={`absolute w-24 py-1 px-2 text-xs text-center text-white rounded-br-[1.25rem]  
                    ${category === "Sin TACC" ? 'bg-greenLabel' : category === 'Vegano' ? 'bg-redLabel' 
                    : category === "Sin azucar" ? 'bg-blueLabel' : 'bg-orangeLabel'}`}>{category}
      </p>
      <div className="w-full h-72 sm:h-[435px] flex flex-col justify-between pt-1 pb-8 items-center px-5">
        <img className="block w-full max-w-full aspect-square object-cover cursor-pointer" src={image} alt={`imagen de ${name}`} onClick={() => {modalHandler()}} />
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
          <button onClick={addedToCart? ()=>handleRemoveFromCart():()=>handleAddToCart()} className={`flex items-center justify-center w-[148px] h-[36px]  rounded-[4px] ${addedToCart?  'bg-yellowGreen text-black' :  'bg-avocadoGreen text-white'}`}>
            {addedToCart? <img src="/check.svg" /> : <img src="/button-cart.svg" /> }
            <p className="px-1 text-sm">{addedToCart? 'Agregado' : 'Agregar al carrito'}</p>
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
