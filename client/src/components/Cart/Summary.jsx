const Summary = () => {
    return (
      <div className='w-[424px] h-[296px] border rounded-lg mt-12 ml-16 p-6 border-platinum flex flex-col'>
          <h4 className='text-xl font-normal leading-7'>Resumen de compra:</h4>
          <div className="text-sm font-normal leading-5 flex justify-between py-3">
              <p className="font-poppins">Subtotal:</p>
              <p>$6100</p>
          </div>
          <hr className="text-platinum"/>
          <div className="text-sm font-normal leading-5 flex justify-between py-3">
              <p className="font-poppins">Envio:</p>
              <p>$700</p>
          </div>
          <hr className="text-platinum"/>
          <div className="flex justify-between py-3">
              <p className="font-bold text-lg leading-7">Total:</p>
              <p className="font-bold text-lg leading-5">$6800</p>
          </div>
          <button className="mt-4 py-4 px-10 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base">Iniciar compra</button>
      </div>
    )
  }
  
  export default Summary