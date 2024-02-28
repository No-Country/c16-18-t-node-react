const Discount = () => {
  return (
    <div className="w-5/6 lg:w-11/12 xl:w-3/5 flex flex-col sm:flex-row gap-4 border rounded-lg mx-8 mt-8 sm:mt-12 sm:ml-16 py-6 px-3 border-platinum">
      <h4 className="font-normal text-base md:text-xl leading-7">
        ¿Tienes un cupón de descuento?
      </h4>

      <input
        className="border border-platinum rounded-full sm:w-[482px] sm:h-12  py-2.5 sm:py-6 px-3.5"
        placeholder="Ingresar código"
      ></input>
      <button className=" px-10 py-2.5 sm:py-0 sm:h-12 bg-black text-white text-center rounded-full ">
        Aplicar
      </button>


    </div>
  );
};

export default Discount;
