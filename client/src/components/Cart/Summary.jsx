import Swal from "sweetalert2";
import { useCart } from "../../stores/useCart"
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from "react";

const Summary = () => {

    const { subtotal, clearCart, clearSubtotal} = useCart();

    const total = subtotal.reduce((accumulator, product) => accumulator + parseInt(product.productSubtotal), 0);

    const [isExploding, setIsExploding] = useState(false);

    const handlePurchase = () =>{
        Swal.fire({
            text: "Tu pedido fue realizado",
            icon: "success",
            customClass: {
                container: 'w-auto'
            },
    }).then(() => {
        setIsExploding(true);
        clearCart();
        clearSubtotal();
    })}


    return (
      <div className='w-5/6 lg:w-11/12 xl:w-[424px] sm:h-[296px] border rounded-lg mx-8 mt-8 sm:ml-16 lg:mt-12 lg:ml-16 p-6 border-platinum flex flex-col'>
          <h4 className='text-base sm:text-xl font-normal leading-7'>Resumen de compra:</h4>
          <div className="text-sm font-normal leading-5 flex justify-between py-3">
              <p className="font-poppins">Subtotal:</p>
              <p>${total}</p>
          </div>
          <hr className="text-platinum"/>
          <div className="text-sm font-normal leading-5 flex justify-between py-3">
              <p className="font-poppins">Envio:</p>
              <p>$700</p>
          </div>
          <hr className="text-platinum"/>
          <div className="flex justify-between py-3">
              <p className="font-bold text-sm sm:text-lg leading-7">Total:</p>
              <p className="font-bold text-sm sm:text-lg leading-5">${total + 700}</p>
          </div>
          <button onClick={handlePurchase} className="mt-4 py-4 px-10 bg-avocadoGreen sm:w-96 rounded-full text-white font-semibold text-base self-center">Realizar compra</button>
          {isExploding && <ConfettiExplosion />}
      </div>
    )
  }
  
  export default Summary