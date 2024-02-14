const Header = () => {
    return(
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
    )
}

export default Header