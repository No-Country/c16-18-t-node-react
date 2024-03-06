import { useState } from "react"

const ProductModal = ({modalOpen, modalHandler}) => {

    const [amount, setAmount] = useState(0);

    const amountHandler = (e) => {
        if(e.target.innerText === "+"){
            const newAmount = amount + 1;
            setAmount(newAmount);
        }else if(amount > 0){
            const newAmount = amount - 1;
            setAmount(newAmount); 
        }
    }

    return(
            <div className={`${modalOpen ? 'flex' : 'hidden'} fixed top-0 z-50 justify-center items-center px-4 py-2 w-full h-full bg-grayishGreen4 bg-opacity-75`}>
                <div className="relative flex flex-col gap-8 p-8 h-full bg-white rounded-md overflow-y-scroll scroll-smooth
                                lg:p-10 lg:h-5/6 ">
                    <img className="absolute top-4 left-4 z-40 w-6 cursor-pointer" src="/cross-icon.svg" alt=" " onClick={() => {modalHandler()}} />
                    <div className="grid lg:grid-flow-col">
                        <img className="block aspect-square object-contain" src="/dummyImg.png" alt=" " />
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-2xl font-extrabold">Titulo de producto</h2>
                                <span>⭐⭐⭐⭐ (0)</span>
                                <p className="text-lg font-semibold">Marca: <span className="text-slate-400">lorem ipsum</span></p>
                                <p className="text-lg font-semibold">Peso: <span className="text-slate-400">lorem ipsum</span></p>
                                <p className="text-lg font-semibold">Tipo: <span className="text-slate-400">lorem ipsum</span></p>
                                <p className="text-lg font-semibold">Ingredientes: <span className="text-slate-400">lorem ipsum</span></p>
                            </div>
                            <div className="flex flex-col gap-2">
                                <p className="text-2xl text-avocadoGreen font-bold">$0.00</p>
                                <p className="text-sm font-bold">Disponible en: <span className="text-slate-400 font-semibold">Lorem ipsum, Dolor sit</span></p>
                                <div className="flex flex-col items-center gap-4 lg:flex-row  lg:gap-2">
                                    <div className="flex gap-4 items-center py-1 px-2 border-2 border-[#f0f0f0] rounded">
                                        <button className="text-xl font-bold px-3 py-1 bg-[#f0f0f0] rounded-sm" onClick={(e) => {amountHandler(e)}}>-</button> {amount} <button className="text-xl font-bold px-3 py-1 bg-[#f0f0f0] rounded-sm" onClick={(e) => {amountHandler(e)}}>+</button>
                                    </div>
                                    <button className="w-full h-full px-8 py-2 text-white text-sm font-semibold bg-avocadoGreen rounded lg:w-fit lg:text-base">Agregar al carrito</button>
                                    <div>
                                        <button className="p-2 border-2 border-slate-200 rounded"> 
                                            <svg width="26" height="26" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.8579 0.891938C18.7639 0.891938 21.1202 3.28076 21.1202 6.22683C21.1202 7.74045 20.4979 9.1043 19.4993 10.0757L11.0008 18.7349L2.34806 9.91926C1.4402 8.96038 0.880627 7.66096 0.880627 6.22683C0.880627 3.27992 3.23694 0.891938 6.14293 0.891938C8.33171 0.891938 10.2077 2.24742 11.0008 4.17521C11.794 2.24742 13.6691 0.891938 15.8579 0.891938ZM15.8579 0C13.9225 0 12.1447 0.911183 11 2.41309C9.85609 0.911183 8.07833 0 6.14211 0C2.75495 0 0 2.79379 0 6.22683C0 7.84002 0.608269 9.37121 1.71256 10.5376L11 20L20.1224 10.7058C21.3274 9.53269 22 7.93792 22 6.22767C22 2.79379 19.2442 0.000837053 15.8579 0.000837053V0Z" fill="#000000"/>
                                            </svg>
                                        </button>
                                        <button className="p-2 border-2 ml-2 border-slate-200 rounded">
                                            <svg width="26" height="26" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.98943 0.190802C11.6143 0.190802 13.1531 0.560097 14.6056 1.29869C15.9966 2.01266 17.1691 3.00052 18.1232 4.26228C19.0772 5.52404 19.6957 6.93659 19.9789 8.49994C19.6957 10.0633 19.0772 11.4758 18.1232 12.7376C17.1691 13.9994 15.9966 14.9872 14.6056 15.7012C13.1531 16.4398 11.6143 16.8091 9.98943 16.8091C8.36453 16.8091 6.8258 16.4398 5.37324 15.7012C3.98223 14.9872 2.80972 13.9994 1.85571 12.7376C0.901696 11.4758 0.283126 10.0633 0 8.49994C0.283126 6.93659 0.901696 5.52404 1.85571 4.26228C2.80972 3.00052 3.98223 2.01266 5.37324 1.29869C6.8258 0.560097 8.36453 0.190802 9.98943 0.190802ZM9.98943 14.9626C11.2697 14.9626 12.4883 14.6795 13.6455 14.1132C14.7656 13.5716 15.7166 12.8084 16.4983 11.8236C17.2799 10.8388 17.8123 9.73093 18.0955 8.49994C17.8123 7.26896 17.2799 6.16107 16.4983 5.17629C15.7166 4.1915 14.7656 3.42829 13.6455 2.88666C12.4883 2.3204 11.2697 2.03728 9.98943 2.03728C8.70921 2.03728 7.49054 2.3204 6.33341 2.88666C5.21322 3.42829 4.26228 4.1915 3.48061 5.17629C2.69893 6.16107 2.16653 7.26896 1.88341 8.49994C2.16653 9.73093 2.69893 10.8388 3.48061 11.8236C4.26228 12.8084 5.21322 13.5716 6.33341 14.1132C7.49054 14.6795 8.70921 14.9626 9.98943 14.9626ZM9.98943 12.6545C9.23853 12.6545 8.5461 12.4668 7.91215 12.0913C7.27819 11.7159 6.77349 11.2112 6.39804 10.5772C6.02259 9.94327 5.83486 9.25084 5.83486 8.49994C5.83486 7.74904 6.02259 7.05661 6.39804 6.42266C6.77349 5.7887 7.27819 5.284 7.91215 4.90855C8.5461 4.5331 9.23853 4.34537 9.98943 4.34537C10.7403 4.34537 11.4328 4.5331 12.0667 4.90855C12.7007 5.284 13.2054 5.7887 13.5808 6.42266C13.9563 7.05661 14.144 7.74904 14.144 8.49994C14.144 9.25084 13.9563 9.94327 13.5808 10.5772C13.2054 11.2112 12.7007 11.7159 12.0667 12.0913C11.4328 12.4668 10.7403 12.6545 9.98943 12.6545ZM9.98943 10.808C10.408 10.808 10.7926 10.7034 11.1435 10.4941C11.4943 10.2849 11.7744 10.0048 11.9836 9.65399C12.1929 9.30316 12.2975 8.91848 12.2975 8.49994C12.2975 8.08141 12.1929 7.69672 11.9836 7.34589C11.7744 6.99506 11.4943 6.71502 11.1435 6.50575C10.7926 6.29648 10.408 6.19185 9.98943 6.19185C9.5709 6.19185 9.18622 6.29648 8.83539 6.50575C8.48456 6.71502 8.20451 6.99506 7.99524 7.34589C7.78597 7.69672 7.68134 8.08141 7.68134 8.49994C7.68134 8.91848 7.78597 9.30316 7.99524 9.65399C8.20451 10.0048 8.48456 10.2849 8.83539 10.4941C9.18622 10.7034 9.5709 10.808 9.98943 10.808Z" fill="#000000"/>
                                            </svg>
                                        </button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-2 border-[#f0f0f0] p-4 rounded font-semibold">
                        <h3>Información nutricional</h3>
                        <div className="mt-4">
                            <p className="py-4 border-y-2 border-avocadoGreen">Tamaño de la porción: 50 gramos (3/4 de taza)</p>
                            <div className="flex justify-between mt-4 mb-2">
                                <p>Cantidades por porción</p>
                                <p>%VD*</p>
                            </div>
                            <ul className="grid grid-cols-3 text-sm  border-b border-r border-grayishGreen1 divide-grayishGreen1 divide-y divide-x">
                                <li className="p-2 bg-[#f0f0f0] border-grayishGreen1 border-t border-l">Valor energetico (Kcal)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Carbohidratos (g)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Proteínas (g)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Fibra dietaria total (g)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Grasas totales (g)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Grasas saturadas (g)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Grasas trans (g)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 bg-[#f0f0f0]">Sodio (mg)</li>
                                <li className="p-2 text-center">lorem</li>
                                <li className="p-2 text-center">lorem</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductModal