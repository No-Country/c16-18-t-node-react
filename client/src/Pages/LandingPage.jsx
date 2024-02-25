import ProductCard from "../components/ProductCard.jsx";
import ProductModal from "../components/modals/ProductModal.jsx";
import Searchbar from "../components/Searchbar.jsx";
import { useState } from "react";
import { createPortal } from "react-dom";
import useSWR from "swr";
import axios from "axios";
 
const userIsLogged = true; //esto deberia ser un dato para saber si el usuario esta loggeado, modificar cuando el login este completo!!
const fetcher = url => axios.get(url).then(res => res.data);

const LandingPage = ({handleSearch}) => {

    const {data, isLoading} = useSWR('https://c16-18-t-node-react.onrender.com/api/products', fetcher);
    const [modalOpen, setModalOpen] = useState(false);
    const modalHandler = () => {
        setModalOpen(!modalOpen)
    }


    return (
        <>  
            {modalOpen && createPortal(<ProductModal modalHandler={modalHandler} modalOpen={modalOpen}/>, document.getElementById("product-modal"))}
            <main>
                <section className="relative flex justify-center items-center overflow-hidden">
                    <img className="w-full" src="/hero.png" alt=" " />
                    <div className="absolute top-1/2">
                        <h1 className="mb-2 text-[2.625rem] max-w-[20ch]">Hace que tus días, <span className="text-darkGreen1 font-extrabold">tengan más sabor...</span></h1>
                        <Searchbar handleSearch={handleSearch}/>
                    </div>
                </section>
                <section className={` ${userIsLogged ? 'block' : 'hidden'} gap-12 p-12`}>
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-[2.5rem] text-darkGreen1 font-extrabold" >Comercios cercanos</h2>
                        <a className="flex items-center gap-2" href="#"><p>Ver más</p> <img src="/arrow-icon.svg" alt=" " /></a>
                    </div>
                    <div className="grid grid-flow-col auto-cols-fr gap-4">
                        <div className="flex flex-col bg-avocadoGreen rounded-xl">
                            <img src="/carrefour-logo.svg" alt="carrefour's logo" />
                            <p className="py-4 text-lg text-center text-white font-semibold">Carrefour</p>
                        </div>
                        <div className="flex flex-col bg-avocadoGreen rounded-xl">
                            <img src="/dietetica-online-logo.svg" alt="dietetica online's logo" />
                            <p className="py-4 text-lg text-center text-white font-semibold">Dietetica Online</p>
                        </div>
                        <div className="flex flex-col bg-avocadoGreen rounded-xl">
                            <img src="/natural-dietetica-logo.svg" alt="natural dietetica's logo" />
                            <p className="py-4 text-lg text-center text-white font-semibold">Natural Dietetica</p>
                        </div>
                        <div className="flex flex-col bg-avocadoGreen rounded-xl">
                            <img src="/dieteticas-tomy-logo.svg" alt="dieteticas tomy's logo" />
                            <p className="py-4 text-lg text-center text-white font-semibold">Dieteticas Tomy</p>
                        </div>
                        <div className="flex flex-col bg-avocadoGreen rounded-xl">
                            <img src="/dietetica-callao-logo.svg" alt="dietetica callao's logo" />
                            <p className="py-4 text-lg text-center text-white font-semibold">Dietetica Callao</p>
                        </div>
                    </div>
                </section> 
                <section className="p-12 bg-[#edebee]">
                    <h2 className="mb-8 text-[2.5rem] text-darkGreen1 font-extrabold">Categorias</h2>
                    <div className="grid grid-flow-col auto-cols-max justify-evenly text-center">
                        <div>
                            <div className="p-4 bg-darkGreen1 w-fit rounded-full">
                                <img src="/gluten-free-icon.svg" alt=" " />
                            </div>
                            <p className="font-semibold mt-6">SIN T.A.C.C</p>
                        </div>
                        <div>
                            <div className="p-4 bg-darkGreen1 w-fit rounded-full">
                                <img src="/vegan-icon.svg" alt=" " />
                            </div>
                            <p className="font-semibold mt-6">VEGANO</p>
                        </div>
                        <div>
                            <div className="p-4 bg-darkGreen1 w-fit rounded-full">
                                <img src="/keto-icon.svg" alt=" " />
                            </div>
                            <p className="font-semibold mt-6">KETO</p>
                        </div>
                        <div>
                            <div className="p-4 bg-darkGreen1 w-fit rounded-full">
                                <img src="/sugar-free-icon.svg" alt=" " />
                            </div>
                            <p className="font-semibold mt-6">SIN AZUCAR</p>
                        </div>
                        <div>
                            <div className="p-4 bg-darkGreen1 w-fit rounded-full">
                                <img src="/organic-icon.svg" alt=" " />
                            </div>
                            <p className="font-semibold mt-6">ORGÁNICO</p>
                        </div>
                        <div>
                            <div className="p-4 bg-darkGreen1 w-fit rounded-full">
                            <img src="/more-icon.svg" alt=" " />
                            </div>
                            <p className="font-semibold mt-6">VER MÁS</p>
                        </div>
                    </div>
                </section>
                <section className="px-12 py-8 ">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-[2.5rem] text-darkGreen1 font-extrabold">Productos más vendidos</h2>
                        <a className="flex items-center gap-2" href="#">Ver más <img src="/arrow-icon.svg" alt=" " /></a>
                    </div>
                    <div className="grid grid-cols-1 gap-y-2 lg:grid-cols-4 lg:gap-x-8">
                        {data ? data.payload.slice(0, 8).map(product => <ProductCard key={product._id} {...product} modalHandler={modalHandler}/>) : null}
                    </div>
                </section>
                <section className="flex flex-col gap-8 p-12">
                    <div className="flex">
                        <div className="flex flex-col">
                            <h2 className="text-[2.5rem] font-bold max-w-[30ch]">¿Sabías que ahora podes hacer tus pedidos desde la web?</h2>
                            <h3 className="text-lg">Comenzaron tus compras virtuales por NutriMarket</h3>
                            <a className="px-8 py-4 mt-6 w-fit rounded-full bg-grayishGreen3" href="#">Comprar</a>
                        </div>
                        <img className="w-1/2" src="/guy-with-veggies-img.png" alt=" "/>
                    </div>
                    <div className="grid grid-flow-col auto-cols-fr gap-8">
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="/best-prices-icon.svg" alt=" " />
                            <p>Los mejores precios y ofertas</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="/free-delivery-icon.svg" alt=" " />
                            <p>Delivery gratis</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="/daily-offers-icon.svg" alt=" " />
                            <p>Ofertas diarias</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="/wide-variety-icon.svg" alt=" " />
                            <p>Amplia variedad</p>
                        </div>
                    </div>
                </section>
            </main>
        </>

    )
}

export default LandingPage
