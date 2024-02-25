import Searchbar from "../components/Searchbar.jsx"
import ProductCard from "../components/ProductCard.jsx"
import { useState } from "react"
import useSWR from "swr"
import axios from "axios"

const fetcher = url => axios.get(url).then(res => res.data);

const ResultPage = ({handleSearch, searchInput}) => {

    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isProdOpen, setIsProdOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const {data, isLoading} = useSWR('https://c16-18-t-node-react.onrender.com/api/products', fetcher);
    

    const searchedData = data ? data.payload.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase())) : []; 

    return(
        <>
        <main className="px-8 my-12">
            <section className="flex items-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[2.625rem] max-w-[32ch]">¡Encuentra rápidamente tus productos favoritos o descubre nuevas opciones que se adapten a tus necesidades y gustos!</h1>
                    <Searchbar handleSearch={handleSearch}/>
                </div>
                <img className="relative -right-8" src="/hero2.svg" alt=" " />
            </section>
            <section className="flex gap-8">
                <div className="w-1/4">
                    <div className="relative py-4 cursor-pointer"> 
                        <div className="flex justify-between" onClick={() => {setIsCatOpen(!isCatOpen)}}>
                            <h2>Categorias</h2>
                            <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        </div>
                        <div className={`relative top-full mt-4 ${isCatOpen ? 'block' : 'hidden'}`}>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Vegano</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Vegetariano</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Organico</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Sin T.A.C.C</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Sin azúcar</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Sin aditivos</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Bajo en grasas</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Keto</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Bajo en calorias</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full">Sin sodio</button>
                        </div>
                    </div>
                    <div className="relative flex flex-col py-4 cursor-pointer">
                        <div className="flex justify-between" onClick={() => {setIsProdOpen(!isProdOpen)}}>
                            <h2>Productos</h2>
                            <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        </div>
                        <div className={`relative top-full mt-4 ${isProdOpen ? 'flex-col gap-2' : 'hidden'}`}>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3" type="checkbox" name="bebidas" id="bebidas" />
                                <div>Bebidas (0)</div>  
                            </div>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3" type="checkbox" name="verduras" id="verduras" />
                                <div>Verduras (0)</div>
                            </div>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3 peer" type="checkbox" name="frutas" id="frutas" />
                                <div>Frutas (0)</div>
                                 
                            </div>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3" type="checkbox" name="almacen" id="almacen" />
                                <div>Almacén (0)</div>
                            </div>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3" type="checkbox" name="congelados" id="congelados" />
                                <div>Congelados (0)</div>
                            </div>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3" type="checkbox" name="frutos secos" id="frutos-secos" />
                                <div>Frutos secos (0)</div>
                            </div>
                            <div className="relative flex items-center gap-2">
                                <input className="p-2 border border-grayishGreen4 rounded-full appearance-none checked:bg-grayishGreen3" type="checkbox" name="suplementos" id="suplementos" />
                                <div>Suplementos (0)</div>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex flex-col py-4 cursor-pointer">
                        <div className="flex justify-between" onClick={() => {setIsPriceOpen(!isPriceOpen)}}>
                            <h2>Precio</h2>
                            <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        </div>
                        <div className={`relative top-full ${isPriceOpen ? 'block' : 'hidden'} mt-4 w-full bg-transparent`}>
                            <input className="absolute w-full h-[2px] appearance-none pointer-events-none" type="range" min="0" max="99999" step="100"/>
                            <input className="absolute w-full h-[2px] bg-grayishGreen4 appearance-none pointer-events-none" type="range" min="0" max="99999" step="100"/>
                            <p className="mt-4">precio:  <span className="font-semibold">x</span> - <span className="font-semibold">y</span></p>
                        </div>
                    </div>
                    <div className="relative flex flex-col py-4 cursor-pointer">
                        <div className="flex justify-between" onClick={() => {setIsShopOpen(!isShopOpen)}}>
                            <h2>Comercios cercanos</h2>
                            <img className="rotate-90" src="/arrow-icon.svg" alt=" " />
                        </div>
                        <div className={`relative top-full mt-4 ${isShopOpen ? 'grid  gap-3' : 'hidden'}`}>
                            <div className="flex items-center gap-2 border border-grayishGreen4 rounded-md">
                                <img className="w-1/3" src="/dieteticas-tomy-logo.svg" alt=" " />
                                <div>
                                    <p className="text-sm">Dieteticas Tomy</p>
                                    <p className="text-sm" >Envio $750</p>
                                    <p className="text-sm">30-45 min</p>
                                    <p className="text-sm">⭐⭐⭐⭐</p> 
                                </div>
                            </div>
                            <div className="flex items-center gap-2 border border-grayishGreen4 rounded-md">
                                <img className="w-1/3" src="/natural-dietetica-logo.svg" alt=" " />
                                <div>
                                    <p className="text-sm">Natural Dietetica</p>
                                    <p className="text-sm" >Envio $750</p>
                                    <p className="text-sm">30-45 min</p> 
                                    <p className="text-sm">⭐⭐⭐⭐</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 border border-grayishGreen4 rounded-md">
                                <img className="w-1/3" src="/dietetica-online-logo.svg" alt=" " />
                                <div>
                                    <p className="text-sm">Dietetica Online</p>
                                    <p className="text-sm">Envio $750</p>
                                    <p className="text-sm">30-45 min</p>
                                    <p className="text-sm">⭐⭐⭐⭐</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="grid grid-cols-3 gap-8">
                    {searchedData.map(product => <li key={product._id}><ProductCard {...product}/></li>)}
                </ul>
            </section>
        </main>
        </>
    )
}   

export default ResultPage