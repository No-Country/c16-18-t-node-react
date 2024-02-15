import ProductCard from "../components/ProductCard.jsx"
import products from "../constants/Products.js"
import Header from "../components/Header.jsx"
import Searchbar from "../components/Searchbar.jsx"

const LandingPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="relative flex justify-center items-center overflow-hidden">
                    <img className="w-full" src="/hero.png" alt=" " />
                    <div className="absolute top-1/2">
                        <h1 className="mb-2 text-[2.625rem] max-w-[20ch]">Hace que tus días, <span className="text-darkGreen1 font-extrabold">tengan más sabor...</span></h1>
                        <Searchbar />
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
                    <div className="w-full h-auto flex items-center justify-between flex-wrap gap-x-2 gap-y-4">
                    {products.map((product) => (
                        <ProductCard key={product.id} {...product}/>
                    ))}
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
                            <img src="best-prices-icon.svg" alt=" " />
                            <p>Los mejores precios y ofertas</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="free-delivery-icon.svg" alt=" " />
                            <p>Delivery gratis</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="daily-offers-icon.svg" alt=" " />
                            <p>Ofertas diarias</p>
                        </div>
                        <div className="flex items-center gap-4 p-4 bg-[#F4F6FA] rounded-xl">
                            <img src="wide-variety-icon.svg" alt=" " />
                            <p>Amplia variedad</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="flex justify-between p-12 leading-8">
                <div>
                    <p>LOGO</p>
                </div>
                <div className="grid grid-flow-col auto-cols-fr gap-24">
                    <div>
                        <p className="font-bold">Sobre Nosotros</p>
                        <ul>
                            <li>¿Quienes Somos?</li>
                            <li>Preguntas Frecuentes</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-bold">Legal</p>
                        <ul>
                            <li>Términos y Condiciones</li>
                            <li>Pólitica de Privacidad</li>
                        </ul>
                    </div>
                    <div className="flex items-start">
                        <img src="/instagram-icon.svg" alt=" " />
                        <img src="/facebook-icon.svg" alt=" " />
                    </div>
                </div>            
            
            </footer>
        </>

    )
}

export default LandingPage