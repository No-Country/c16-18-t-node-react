import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/modals/ProductModal.jsx";
import Searchbar from "../components/Searchbar.jsx";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import useSWR from "swr";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../auth/context/AuthContext.jsx";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode } from "swiper/modules";
import "swiper/css/bundle";
import categories from "../constants/Categories.js";

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
        <section className="relative left-1/2 w-screen -translate-x-1/2 justify-center items-center overflow-hidden invisible hidden md:visible md:flex">
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
        <section className="flex relative justify-center items-center overflow-hidden md:hidden">
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
        <section className={`${user ? "md:block" : "md:hidden"} gap-12 p-12 invisible hidden md:visible `}>
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

        <section className="relative left-1/2 -translate-x-1/2 w-screen p-8 bg-[#edebee]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="mb-8 text-xl text-center md:text-5xl md:text-start text-darkGreen1 font-extrabold">
              Categorias
            </h2>
            {/*Categorias version carousel*/}
            <div >
              <Swiper
                loop={true}
                modules={[A11y, FreeMode]}
                slidesPerView={4}
                spaceBetween={40}
                breakpoints={{
                  640: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 5.5,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                  },
                }}
              >
                {categories.map((category) => (
                  <SwiperSlide key={category.name}>
                    <div
                      className="relative rounded-full w-20 h-20 lg:w-36 lg:h-36 xl:w-44 xl:h-44 text-xs lg:text-xl"
                      key={category.name}
                    >
                      <img src={category.image} alt=" " />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white text-center font-extrabold">
                          {category.name}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/*Categorias version grid*/}
            {/* <div className="hidden sm:block">
              <div className="grid grid-flow-col auto-cols-max justify-evenly text-center ">
                {categories.map((category) => (
                  <div className="relative rounded-full w-24 h-24 text-xs md:w-44 md:h-44 md:text-xl" key={category.name}>
                    <img src={category.image} alt=" " />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-center font-extrabold">
                        {category.name}
                      </p>
                    </div>
                  </div>
                ))}

              </div>
            </div> */}
          </div>
        </section>

        <section className="px-8 py-8 md:visible md:block">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
            <h2 className="text-xl lg:text-[2.5rem] text-darkGreen1 font-extrabold">
              Productos más vendidos
            </h2>
            <a className="self-end flex lg:items-center gap-2" href="#"/>

            <NavLink className="flex items-center gap-2" to="/results">

              Ver más <img src="/arrow-icon.svg" alt=" " />
            </NavLink>
          </div>
          <div className="block xl:hidden justify-center">
            <Swiper
              modules={[A11y, FreeMode]}
              breakpoints={{
                320: {
                  slidesPerView: 1.3,
                  spaceBetween: 30,
                },
                640: {
                  slidesPerView: 2.3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2.5,
                  spaceBetween: 20,
                },
              }}
            >
              {data
                ? data.payload.slice(0, 8).map((product) => (
                    <SwiperSlide key={product._id}>
                      <ProductCard
                        product={product}
                        key={product._id}
                        {...product}
                        modalHandler={modalHandler}
                      />
                    </SwiperSlide>
                  ))
                : null}
            </Swiper>
          </div>

          <div className="hidden xl:block">
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
          </div>
        </section>
        <section className="flex flex-col gap-8 py-12">
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
