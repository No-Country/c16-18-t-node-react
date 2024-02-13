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
                        <h1 className="text-[2.625rem] max-w-[20ch]">Hace que tus días, <span className="text-darkGreen1 font-bold">tengan más sabor...</span></h1>
                        <div className="relative">
                            <input className="p-4 rounded-full w-full" type="text" placeholder="Veamos que tenes cerca" />
                            <button className="absolute top-0 right-0 px-6 py-4 font-bold bg-grayishGreen3 rounded-full" type="button">Buscar</button>
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