const Searchbar = () => {
    return (
        <div className="relative">
            <input className="p-4 rounded-full w-full" type="text" placeholder="Veamos que tenes cerca" />
            <button className="absolute top-0 right-0 px-6 py-4 font-bold bg-grayishGreen3 rounded-full" type="button">Buscar</button>
        </div>
    )
}

export default Searchbar