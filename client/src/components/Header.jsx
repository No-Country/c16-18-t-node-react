const isLoggedIn = true; // esto deberia ser info que viene de la base de datos

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
        {isLoggedIn ?
            <div className="flex items-center gap-2 group">
                <div>
                    <p className="text-sm text-darkGreen1 font-bold">Julio Rossi</p>
                    <a className="text-xs text-grayishGreen2 font-bold" href="#"><p>Cerrar Sesión</p></a>
                </div>
                <img src="/pfp.svg" alt=" " />
                <img className="rotate-90 group-hover:rotate-[270deg]" src="/arrow-icon.svg" alt=" " />
            </div>
        :
            <div className="flex gap-6 items-center">
                <img src="/magnifier-icon.svg" alt=" " />
                <img src="/cart-icon.svg" alt=" " />
                <div>
                    <a className="text-darkGreen1 font-bold" href="#">Inicia Sesión</a>
                    <a className="px-6 py-3 ml-6 bg-grayishGreen3 rounded-full" href="#">Registrate</a>
                </div>
            </div>}
        </header>
    )
}

export default Header