import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import Searchbar from "../components/Searchbar.jsx"
import products from "../constants/Products.js"
import ProductCard from "../components/ProductCard.jsx"

const ResultPage = () => {
    return(
        <>
        <Header />
        <main className="px-8 my-12">
            <section className="flex items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[2.625rem] max-w-[32ch]">¡Encuentra rápidamente tus productos favoritos o descubre nuevas opciones que se adapten a tus necesidades y gustos!</h1>
                    <Searchbar/>
                </div>
                <img className="relative -right-8" src="/hero2.svg" alt=" " />
            </section>
            <section className="grid grid-flow-col gap-8">
                <div>
                    <div className="relative flex justify-between py-4"> 
                        <h2>Categorías</h2>
                        <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        <div className="absolute top-full hidden">
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Vegano</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Vegetariano</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Organico</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Sin T.A.C.C</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Sin azúcar</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Sin aditivos</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Bajo en grasas</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Keto</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Bajo en calorias</button>
                            <button className="text-sm px-4 py-2 m-1 bg-[#f2f2f2] rounded-full">Sin sodio</button>
                        </div>
                    </div>
                    <div className="relative flex justify-between py-4">
                        <h2>Productos</h2>
                        <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        <div className="absolute top-full hidden flex-col gap-2">
                            <div>
                                <input type="radio" name="bebidas" id="bebidas" />
                                <label htmlFor="bebidas">Bebidas (0)</label>   
                            </div>
                            <div>
                                <input type="radio" name="verduras" id="verduras" />
                                <label htmlFor="verduras">Verduras (0)</label>
                            </div>
                            <div>
                                <input type="radio" name="frutas" id="frutas" />
                                <label htmlFor="frutas">Frutas (0)</label>
                            </div>
                            <div>
                                <input type="radio" name="almacen" id="almacen" />
                                <label htmlFor="almacen">Almacén (0)</label>
                            </div>
                            <div>
                                <input type="radio" name="congelados" id="congelados" />
                                <label htmlFor="congelados">Congelados (0)</label>
                            </div>
                            <div>
                                <input type="radio" name="frutos secos" id="frutos-secos" />
                                <label htmlFor="frutos-secos">Frutos secos (0)</label>
                            </div>
                            <div>
                                <input type="radio" name="suplementos" id="suplementos" />
                                <label htmlFor="suplementos">Suplementos (0)</label>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex justify-between py-4">
                        <h2>Precio</h2>
                        <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        <div className="absolute top-full w-full">
                            <div className="relative w-full rounded-full">
                                <div className="absolute z-0 w-full h-2 bg-avocadoGreen rounded-full"></div>
                                <div className="absolute z-10 w-full bg-transparent">
                                    <input className="absolute -top-1 w-full bg-transparent appearance-none z-20" min="0" max="30000" step="100" type="range" />
                                    <input className="absolute -top-1 z-30 w-full bg-transparent appearance-none" min="0" max="30000" step="100" type="range" />
                                </div>
                            </div> 
                        </div>

                    </div>
                </div>
                <ul className="grid grid-cols-3  gap-y-8">
                    {products.map(product => <li key={product.id}><ProductCard {...product}/></li>)}
                </ul>
            </section>
        </main>
        <Footer />
        </>
    )
}   

export default ResultPage