const SearchBar = () => {
    return (
      <div className="w-full h-[86px] bg-teaGreen  px-5 flex flex-col sm:flex-row">
          <p className="pt-6 sm:pl-16 sm:pt-8 leading-6 text-sm sm:text-base font-normal text-start font-poppins flex">
            {" "}
            Enviar a: <img className="w-3.5 h-3.5 sm:w-6 sm:h-6 mt-1 mx-3" src="/location.png"/> Regent Street, A4, A4201, London{" "}
          </p>
          <p className="text-avocadoGreen underline font-medium sm:ml-2.5 text-start sm:pt-8">
              Cambiar ubicación
            </p>{" "}
        </div>
    )
  }
  
  export default SearchBar