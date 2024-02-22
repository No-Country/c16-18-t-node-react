const SearchBar = () => {
    return (
      <div className="w-full h-[86px] bg-teaGreen mt-40">
          <p className="pl-16 pt-8 leading-6 text-base font-normal text-start font-poppins flex">
            {" "}
            Enviar a: <img className="w-6 h-6 mx-3" src="/location.png"/> Regent Street, A4, A4201, London{" "}
            <span className="text-avocadoGreen underline font-medium ml-2.5">
              Cambiar ubicación
            </span>{" "}
          </p>
        </div>
    )
  }
  
  export default SearchBar