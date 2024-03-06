import { AuthContext } from "../auth/context/AuthContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/modals/ProductModal.jsx";
import { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, FreeMode } from "swiper/modules";
import { useBusiness } from "../hooks/useApi.js";

const MisProductosPage = () => {
  const [productos, setProductos] = useState();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user || user.rol !== "Vendedor") {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(timeoutId);
    } else {
      useBusiness()
        .handleGetMyBusines(`/${user.id}`)
        .then((data) => {
          console.log(data);
          setProductos(data);
        });
    }
    return () => {};
  }, [user, navigate]);

  const [modalOpen, setModalOpen] = useState(false);
  const modalHandler = () => {
    setModalOpen(!modalOpen);
  };

  if (!user || user.rol !== "Vendedor") {
    return (
      <main className="flex flex-col px-8">
        <section className="py-12">
          <h1 className="mb-4 text-[2.625rem] text-darkGreen1 font-extrabold">
            Mis productos
          </h1>
          <div className="flex flex-col gap-4 ml-8 text-lg">
            <p className="max-w-[55ch] leading-7">Accesso Denegado</p>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <>
        {modalOpen &&
          createPortal(
            <ProductModal modalHandler={modalHandler} modalOpen={modalOpen} />,
            document.getElementById("product-modal")
          )}

        <main>
          <section className="px-12 py-8 md:visible md:block">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
              <h2 className="text-xl lg:text-[2.5rem] text-darkGreen1 font-extrabold">
                Mis productos
              </h2>
              <a className="self-end flex lg:items-center gap-2" href="#" />
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
                {productos
                  ? productos.payload.products.slice(0, 8).map((product) => (
                      <SwiperSlide key={product.productId._id}>
                        <ProductCard
                          product={product.productId}
                          key={product.productId._id}
                          {...product.productId}
                          modalHandler={modalHandler}
                        />
                      </SwiperSlide>
                    ))
                  : null}
              </Swiper>
            </div>

            <div className="hidden xl:block">
              <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-4 lg:gap-x-8">
                {!productos || productos.payload.products.length === 0 ? (
                  <div>No tienes productos en tu cuenta</div>
                ) : (
                  productos.payload.products
                    .slice(0, 8)
                    .map((product) => (
                      <ProductCard
                        product={product.productId}
                        key={product.productId._id}
                        {...product.productId}
                        modalHandler={modalHandler}
                      />
                    ))
                )}
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default MisProductosPage;
