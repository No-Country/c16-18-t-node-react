import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/modals/ProductModal.jsx";
import Searchbar from "../components/Searchbar.jsx";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import useSWR from "swr";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext.jsx";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const LandingPage = ({ handleSearch }) => {
  const { user } = useContext(AuthContext);
  const { data } = useSWR(
    "https://c16-18-t-node-react.onrender.com/api/products",
    fetcher
  );
  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen &&
        createPortal(
          <ProductModal modalHandler={modalHandler} modalOpen={modalOpen} />,
          document.getElementById("product-modal")
        )}
      <main>
        <section className="relative justify-center items-center overflow-hidden invisible hidden md:visible md:flex">
          <img className="w-full" src="/hero.png" alt=" " />
          <div className="absolute top-1/2">
            <h1 className="mb-2 text-[2.625rem] max-w-[20ch]">
              Hace que tus días,{" "}
              <span className="text-darkGreen1 font-extrabold">
                tengan más sabor...
              </span>
            </h1>
            <Searchbar handleSearch={handleSearch} />
          </div>
        </section>
        <section className=" flex relative justify-center items-center overflow-hidden visible  md:invisible md:hidden aspect-auto">
          <img className="w-full" src="/hero-mobile.png" alt=" " />
          <div className="absolute top-1/2 px-4 ">
            <h1 className="mb-2 text-3xl max-w-lg sm:text-3xl sm:max-w-xl text-center">
              Hace que tus días,{" "}
              <span className="text-darkGreen1 font-extrabold">
                tengan más sabor...
              </span>
            </h1>
            <Searchbar handleSearch={handleSearch} />
          </div>
        </section>
        {/* Mobile */}
        <section
          className={` ${
            user ? "md:block" : "md:hidden"
          } gap-12 p-12 invisible hidden md:visible `}
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[2.5rem] text-darkGreen1 font-extrabold">
              Comercios cercanos
            </h2>
            <a className="flex items-center gap-2" href="#">
              <p>Ver más</p> <img src="/arrow-icon.svg" alt=" " />
            </a>
          </div>
          <div className="grid grid-flow-col auto-cols-fr gap-4">
            <div className="flex flex-col bg-avocadoGreen rounded-xl">
              <img src="/carrefour-logo.svg" alt="carrefour's logo" />
              <p className="py-4 text-lg text-center text-white font-semibold">
                Carrefour
              </p>
            </div>
            <div className="flex flex-col bg-avocadoGreen rounded-xl">
              <img
                src="/dietetica-online-logo.svg"
                alt="dietetica online's logo"
              />
              <p className="py-4 text-lg text-center text-white font-semibold">
                Dietetica Online
              </p>
            </div>
            <div className="flex flex-col bg-avocadoGreen rounded-xl">
              <img
                src="/natural-dietetica-logo.svg"
                alt="natural dietetica's logo"
              />
              <p className="py-4 text-lg text-center text-white font-semibold">
                Natural Dietetica
              </p>
            </div>
            <div className="flex flex-col bg-avocadoGreen rounded-xl">
              <img
                src="/dieteticas-tomy-logo.svg"
                alt="dieteticas tomy's logo"
              />
              <p className="py-4 text-lg text-center text-white font-semibold">
                Dieteticas Tomy
              </p>
            </div>
            <div className="flex flex-col bg-avocadoGreen rounded-xl">
              <img
                src="/dietetica-callao-logo.svg"
                alt="dietetica callao's logo"
              />
              <p className="py-4 text-lg text-center text-white font-semibold">
                Dietetica Callao
              </p>
            </div>
          </div>
        </section>
        {/* PENDIENTE DE VERSION MOBILE CON CAROUSEL */}
        <section className="p-12 bg-[#edebee] hidden invisible md:visible md:block">
          <h2 className="mb-8 text-2xl text-center md:text-5xl md:text-start text-darkGreen1 font-extrabold">
            Categorias
          </h2>
          <div className="grid grid-flow-col auto-cols-max justify-evenly text-center">
            <div>
              <div className="relative rounded-full">
                <img src="/noname0.svg" alt=" " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-extrabold">
                    SIN T.A.C.C
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-full">
                <img src="/noname1.svg" alt=" " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-extrabold">
                    SIN EXCESO DE AZUCAR
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-full">
                <img src="/noname.svg" alt=" " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-extrabold">KETO</p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-full">
                <img src="/noname4.svg" alt=" " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-extrabold">
                    VEGANO
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-full">
                <img src="/noname3.svg" alt=" " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-extrabold">
                    ORGÁNICO
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="relative rounded-full">
                <img src="/noname2.svg" alt=" " />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-center font-extrabold">
                    DIABÉTICO
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center">
                <a className="flex items-center gap-2" href="#">
                  <img src="/arrow-icon.svg" alt=" " />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* PENDIENTE DE VERSION MOBILE CON CAROUSEL */}
        <section className="px-12 py-8 hidden invisible md:visible md:block">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[2.5rem] text-darkGreen1 font-extrabold">
              Productos más vendidos
            </h2>
            <a className="flex items-center gap-2" href="#">
              Ver más <img src="/arrow-icon.svg" alt=" " />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-4 lg:gap-x-8">
            {data
              ? data.payload
                  .slice(0, 8)
                  .map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                      {...product}
                      modalHandler={modalHandler}
                    />
                  ))
              : null}
          </div>
        </section>
        <section className="flex flex-col gap-8 py-12 md:py-0 md:p-12">
          <div className="flex flex-col items-center md:flex-row md:justify-between">
            <div className="flex flex-col items-center px-4 md:items-start">
              <h2 className="text-center text-xl md:text-start md:text-4xl xl:text-5xl font-bold max-w-[30ch]">
                ¿Sabías que ahora podes hacer tus pedidos desde la web?
              </h2>
              <h3 className="text-center text-lg text-grayishGreen3 xl:text-xl">
                Comenzaron tus compras virtuales por NutriMarket
              </h3>
              <Link
                className="px-8 py-4 mt-6 w-fit rounded-full bg-grayishGreen3"
                to="/results"
              >
                Comprar
              </Link>
            </div>

            <img
              className="w-1/2 invisible hidden md:visible md:flex"
              src="/guy-with-veggies-img.png"
              alt=" "
            />
            <img
              className="w-full visible flex md:invisible md:hidden "
              src="/guy-with-veggies-img-responsive.png"
              alt=" "
            />
          </div>
          <div className="flex flex-col items-center px-12 w-full md:grid md:grid-flow-col md:auto-cols-fr md:gap-8 md:py-12 md:px-4">
            <div className="w-full mt-2 flex items-center justify-center gap-4 p-4 md:mt-0  bg-[#F4F6FA] rounded-xl">
              <img src="/best-prices-icon.svg" alt=" " />
              <p>Los mejores precios y ofertas</p>
            </div>
            <div className="w-full mt-2 flex items-center justify-center gap-4 p-4 md:mt-0 bg-[#F4F6FA] rounded-xl">
              <img src="/free-delivery-icon.svg" alt=" " />
              <p>Delivery gratis</p>
            </div>
            <div className="w-full mt-2 flex items-center justify-center gap-4 p-4 md:mt-0 bg-[#F4F6FA] rounded-xl">
              <img src="/daily-offers-icon.svg" alt=" " />
              <p>Ofertas diarias</p>
            </div>
            <div className="w-full mt-2 flex items-center justify-center gap-4 p-4 md:mt-0 bg-[#F4F6FA] rounded-xl">
              <img src="/wide-variety-icon.svg" alt=" " />
              <p>Amplia variedad</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
