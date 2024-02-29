import Searchbar from "../components/Searchbar.jsx"
import ProductCard from "../components/ProductCard.jsx"
import { useCallback, useEffect, useState } from "react"
import useSWR from "swr"
import axios from "axios"
import * as Slider from '@radix-ui/react-slider'

const fetcher = url => axios.get(url).then(res => res.data);

const ResultPage = ({handleSearch, searchedInput}) => {

    const {data} = useSWR('https://c16-18-t-node-react.onrender.com/api/products', fetcher);

            

    const [isCatOpen, setIsCatOpen] = useState(false);
    const [isProdOpen, setIsProdOpen] = useState(false);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    const [toRender, setToRender] = useState([]);
    const [priceValue, setPriceValue] = useState([0, 2500])

    const initializerFunction = useCallback(() => {
        if(searchedInput){
            setToRender(data.payload.filter((item) => item.name.toLowerCase().includes(searchedInput.toLowerCase())));
        }else if(data){
            setToRender(data.payload);
        }
    }, [data, searchedInput])

    const priceFilter = useCallback(() => {
       setToRender(data.payload.filter((item) => item.price <= priceValue[1] && item.price >= priceValue[0]))
    }
    , [priceValue, data])

    useEffect(() => {
        initializerFunction();
    }, [initializerFunction]);
 
    const categoryHandler = (e) => {
        const temp = e.target.innerText;
        const categoryFilter = data.payload.filter((item) => item.category.toLowerCase().includes(temp.toLowerCase()));
        setToRender(categoryFilter);
    }

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
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Vegano</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Vegetariano</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Organico</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Sin TACC</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Sin azúcar</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Sin aditivos</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Bajo en grasas</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Keto</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Bajo en calorias</button>
                            <button className="text-sm px-4 py-2 m-1 w-fit bg-[#f2f2f2] rounded-full" onClick={(e) => categoryHandler(e)}>Sin sodio</button>
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
                        <div className={`relative top-full ${isPriceOpen ? 'block' : 'hidden'} mt-4 w-full`}>
                            <form>
                            <Slider.Root 
                              className="relative flex items-center select-none touch-none w-full h-5"
                              value={priceValue}
                              max={2500}
                              step={100}
                              minStepsBetweenThumbs={1}
                              onValueChange={setPriceValue}
                              onValueCommit={priceFilter}
                            >
                            <Slider.Track className="relative bg-avocadoGreen grow rounded h-[5px]">
                                <Slider.Range className="absolute bg-grayishGreen4 rounded-full h-full" />
                            </Slider.Track>
                            <Slider.Thumb
                                className="block w-5 h-5 bg-white  outline-none border-2 border-avocadoGreen rounded-full"
                                aria-label="Volume"
                            />
                            <Slider.Thumb
                                className="block w-5 h-5 bg-white outline-none border-2 border-avocadoGreen rounded-full"
                                aria-label="Volume"
                            />

                            </Slider.Root>
                            </form>
                            <p className="mt-4">precio:  <span className="font-semibold">{priceValue[0]}</span> - <span className="font-semibold">{priceValue[1]}</span></p>
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
                    {toRender.map(product => <li key={product._id}><ProductCard product={product} category={product.category} image={product.image} rating={product.rating} price={product.price} name={product.name} modalHandler={product.modalHandler}/></li>)}
                </ul>
            </section>
        </main>
        </>
    )
}   

export default ResultPage