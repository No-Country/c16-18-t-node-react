import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full pb-8 bg-darkGreen1 flex items-center justify-center">
      <div className="w-[90%] lg:w-[80%] h-full">
        <hr className=" w-[90%] pt-4 lg:pt-10 mt-8 lg:mt-24 mx-auto" />
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-around text-white">
          <div className="w-full flex flex-col items-center text-center my-2  lg:items-start  lg:w-auto ">
            <p className="font-normal text-sm lg:text-base">&copy; 2024 No Country</p>
            <p className="font-normal text-sm lg:text-base">Todos los derechos reservados</p>
          </div>
          <div className="w-full flex flex-col items-center my-2  lg:items-start lg:w-auto ">
            <h3 className="font-bold">Sobre Nosotros</h3>
            <p className="font-normal text-sm lg:text-base">¿Quiénes Somos?</p>
            <p className="font-normal text-sm lg:text-base">Preguntas Frecuentes</p>
          </div>
          <div className="w-full flex flex-col items-center my-2  lg:items-start lg:w-auto ">
            <h3 className="font-bold">Legal</h3>
            <p className="font-normal text-sm lg:text-base">Términos y condiciones</p>
            <p className="font-normal text-sm lg:text-base">Política de Privacidad</p>
          </div>
          <div className="w-full flex flex-col items-center my-2  lg:items-start lg:w-auto ">
            <h3 className="font-bold">Contacto</h3>
            <p className="font-normal text-sm lg:text-base">Escribinos a</p>
          </div>
          <div className="w-full flex flex-col items-center my-2  lg:items-start lg:w-auto ">
            <h3 className="font-bold">Seguinos en:</h3>
            <div className="flex items-start">
              <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/facebook-icon.svg" alt=" " className="pr-2" /></Link>
              <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/instagram-icon.svg" alt=" " className="" /></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
