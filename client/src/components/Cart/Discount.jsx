const Discount = () => {
    return (
      <div className="h-24 w-[872px] flex border rounded-lg mt-12 ml-16 p-6 border-platinum">
        <h4 className="font-normal text-xl leading-7">
          ¿Tienes un cupón de descuento?
        </h4>
        <input
          className="border border-platinum rounded-full w-[482px] h-12 py-6 px-3.5 mr-3.5"
          placeholder="Ingresar codigo"
        ></input>
        <button className=" px-10 bg-black text-white text-center rounded-full">
          Aplicar
        </button>
      </div>
    );
  };
  
  export default Discount;