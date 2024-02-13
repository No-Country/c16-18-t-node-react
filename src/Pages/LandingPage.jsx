const LandingPage = () => {
    return (
        <>
            <header className="flex justify-between items-center p-8">
                <div className="flex gap-14">
                    <div>
                        <p>LOGO</p>
                    </div>
                    <nav className="flex gap-6">
                        <a href="#">Home</a>
                        <a href="#">Sobre Nosotros</a>
                        <a href="#">Contacto</a>
                    </nav>
                </div>

                <div className="flex gap-6 items-center">
                    <img src="/magnifier-icon.svg" alt=" " />
                    <img src="/cart-icon.svg" alt=" " />
                    <div>
                        <a className="text-darkGreen1 font-bold" href="#">Inicia Sesión</a>
                        <a className="px-6 py-3 ml-6 bg-grayishGreen3 rounded-full" href="#">Registrate</a>
                    </div>
                </div>
            </header>
            <main>
                <section className="relative flex justify-center items-center overflow-hidden">
                    <img className="object-contain object-center" src="/hero.png" alt=" " />
                    <div className="absolute top-1/2">
                        <h1 className="text-[2.625rem] max-w-[20ch]">Hace que tus días, <span className="text-darkGreen1 font-extrabold">tengan más sabor...</span></h1>
                        <div className="relative">
                            <input className="p-4 rounded-full w-full" type="text" placeholder="Veamos que tenes cerca" />
                            <button className="absolute top-0 right-0 px-6 py-4 font-bold bg-grayishGreen3 rounded-full" type="button">Buscar</button>
                        </div>
                    </div>
                </section>
                <section className="px-12 py-8 bg-[#edebee]">
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
                        <a href="#">Ver más</a>
                    </div>
                </section>
                <section className="flex flex-col gap-8 px-12 py-8">
                    <div className="flex">
                        <div className="flex flex-col">
                            <h2 className="text-[2.5rem] font-bold max-w-[30ch]">¿Sabías que ahora podes hacer tus pedidos desde la web?</h2>
                            <h3 className="text-lg">Comenzaron tus compras virtuales por NutriMarket</h3>
                            <a className="px-8 py-4 mt-6 w-fit rounded-full bg-grayishGreen3" href="#">Comprar</a>
                        </div>
                        <img className="w-1/2" src="/guy-with-veggies-img.png" alt=" "/>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
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
            <footer>

            </footer>
        </>

    )
}

export default LandingPage