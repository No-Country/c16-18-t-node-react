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
  };



  return (
    <>
    <div className="relative border-[1px] border-grayishGreen4 rounded-2xl overflow-hidden">
      <p className={`absolute w-24 py-2 text-center text-xs text-white rounded-br-[1.25rem]  
                    ${category === "Sin TACC" ? 'bg-greenLabel' : category === 'Vegano' ? 'bg-redLabel' 
                    : category === "Sin azucar" ? 'bg-blueLabel' : 'bg-orangeLabel'}`}>{category}
      </p>
      <div className="flex flex-col p-4">
        <img className="block w-full max-w-full aspect-square object-cover cursor-pointer" src={image} alt={`imagen de ${name}`} onClick={() => {modalHandler()}} />
        <div className="flex flex-col gap-2">
          <h3 className="text-darkGreen1 truncate leading-6 max-w-[25ch]">{name}</h3>
          <span className="text-sm">⭐⭐⭐⭐ ({rating})</span>
          <p className="text-[18px] text-black font-bold ">${price}</p>
          <button onClick={addedToCart? ()=>handleRemoveFromCart():()=>handleAddToCart()} className={`flex items-center gap-2 self-center py-2 px-4 text-sm  
                                                                                          ${addedToCart ? 'bg-yellowGreen text-black' : 'bg-avocadoGreen text-white'} rounded-[4px]`}>
            {addedToCart ? <img src="/check.svg" /> : <img src="/button-cart.svg" />}
            {addedToCart ? 'Agregado' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductCard;