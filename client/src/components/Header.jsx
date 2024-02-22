import { useContext, useState } from "react";
import UserMenu from "./UserMenu.jsx"
import { NavLink } from "react-router-dom";
import RegisterModal from "./modals/RegisterModal.jsx";
import { AuthContext } from "../auth/context/AuthContext.jsx";
import LoginModal from "./modals/LoginModal.jsx";


const Header = () => {
    const { user, logout} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const handleCloseRegisterModal = () => {
        setShowRegisterModal(false)
    }
    const handleCloseLoginModal = () => {
        setShowLoginModal(false)
    }

    const handleLogout = () => {
    logout(false);
    }
    

    return(
        <header className="flex justify-between items-center p-8">
            <div className="flex gap-14">
                <div>
                    <p>LOGO</p>
                </div>
                <nav className="flex gap-6">
                    <NavLink className={({isActive}) => `hover:underline ${isActive ? 'active' : ''}`} to="/">Home</NavLink>
                    <NavLink className={({isActive}) => `hover:underline ${isActive ? 'active' : ''}`} to="/about">Sobre Nosotros</NavLink>
                    <NavLink className={({isActive}) => `hover:underline ${isActive ? 'active' : ''}`} to="/contact">Contacto</NavLink>
                </nav>
            </div>
            <div>
                <div className="flex gap-6 items-center">
                    <img src="/magnifier-icon.svg" alt=" " />
                    <NavLink to="/cart"><img src="/cart-icon.svg" alt=" " /></NavLink>

                <div>
                {user ?
                <div className="relative flex items-center gap-2 group" onMouseEnter={() => {setIsOpen(!isOpen)}} onMouseLeave={() => {setIsOpen(!isOpen)}}>
                    <div className="pl-12">
                        <p className="text-sm text-darkGreen1 font-bold">{user?.name}</p>
                        <a onClick={()=> handleLogout()} className="text-xs text-grayishGreen2 font-bold" href="#"><p>Cerrar Sesión</p></a>
                    </div>
                    <img src="/pfp.svg" alt=" " />
                    <img className="rotate-90 group-hover:rotate-[270deg]" src="/arrow-icon.svg" alt=" " />
                    <UserMenu isOpen={isOpen}/>
                </div>
                :
                <div>
                    <a onClick={() => setShowLoginModal(true)} className="text-darkGreen1 font-bold" href="#">Inicia Sesión</a>
                    <a onClick={() => setShowRegisterModal(true)} className="px-6 py-3 ml-6 bg-grayishGreen3 rounded-full" href="#">Registrate</a>
                </div>
                }
                </div>
            </div>
        </div>    
        <RegisterModal visible={showRegisterModal} onClose={handleCloseRegisterModal} />
        <LoginModal visible={showLoginModal} onClose={handleCloseLoginModal} />
        </header>
    )
}

export default Header