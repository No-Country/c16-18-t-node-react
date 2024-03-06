import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import UserMenu from "./UserMenu.jsx";
import { Link, NavLink } from "react-router-dom";
import RegisterModal from "./modals/RegisterModal.jsx";
import { AuthContext } from "../auth/context/AuthContext.jsx";
import LoginModal from "./modals/LoginModal.jsx";
import { useCart } from "../stores/useCart.js";
import Sidebar from "./Sidebar.jsx";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { cart } = useCart();
  const cartQuantity = cart.length;
  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };
  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogout = () => {
    logout(false);
  };
  
  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const closeSidebar = () => {
    setIsOpenMenu(false);
  };

  return (
    <header className="fixed z-50 flex justify-between items-center p-8 bg-white w-full lg:static">
      <div className="md:hidden">
        <button className=" flex-col justify-center items-center md:hidden " onClick={handleClick}>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${ isOpenMenu ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpenMenu ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpenMenu ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
        </button>
      </div>
      <div className="flex gap-14">
        <Link to="/">
          <img src="/nutrimarket-logo.svg" />
        </Link>
        <nav className="hidden md:flex items-center  gap-6">
          <NavLink className={({ isActive }) => `hover:underline text-xs lg:text-lg ${isActive ? "active" : ""}`} to="/">Home</NavLink>
          <NavLink className={({ isActive }) => `hover:underline text-xs lg:text-lg ${isActive ? "active" : ""}`} to="/about">Sobre Nosotros</NavLink>
          <NavLink className={({ isActive }) => `hover:underline text-xs lg:text-lg ${isActive ? "active" : ""}`} to="/contact">Contacto</NavLink>
        </nav>
      </div>
      <div>
        <div className="flex gap-6 items-center">
         {user && user.rol === "Vendedor" ? null : (
          <NavLink to="/cart">
            <img src="/cart-icon.svg" alt=" " />
            {logout===false && cartQuantity === 0 ? (
              <span></span>
            ) : (
              <span className="absolute top-7 right-72 w-4 h-4 text-xs rounded-full bg-yellowGreen text-center">
                {cartQuantity}
              </span>
            )}
          </NavLink>
                  )}
          <div className="hidden md:flex">
            {user ? (
              <div
                className="relative flex items-center gap-2 group"
                onMouseEnter={() => {
                  setIsOpen(!isOpen);
                }}
                onMouseLeave={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <div className="pl-12">
                  <p className="text-sm text-darkGreen1 font-bold">
                    {user?.name}
                  </p>
                  <a
                    onClick={() => handleLogout()}
                    className="text-xs text-grayishGreen2 font-bold"
                    href="#"
                  >
                    <p>Cerrar Sesión</p>
                  </a>
                </div>

                <img
                  src={user?.avatar}
                  alt=" "
                  className="w-[60px] h-[60px] border rounded-full"
                />
                <img
                  className="rotate-90 group-hover:rotate-[270deg]"
                  src="/arrow-icon.svg"
                  alt=" "
                />
                <UserMenu isOpen={isOpen} />
              </div>
            ) : (
              <div className="flex text-xs lg:text-lg">
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="text-darkGreen1 font-bold"
                  href="#"
                >
                  Inicia Sesión
                </button>
                <button
                  onClick={() => setShowRegisterModal(true)}
                  className="px-6 py-3 ml-6 bg-grayishGreen3 rounded-full"
                  href="#"
                >
                  Registrate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {showRegisterModal && createPortal(<RegisterModal visible={showRegisterModal} onClose={handleCloseRegisterModal}/>, document.getElementById("register-modal"))}
      {showLoginModal && createPortal(<LoginModal visible={showLoginModal} onClose={handleCloseLoginModal}/>, document.getElementById("login-modal"))}
      <Sidebar isOpenMenu={isOpenMenu} onClose={closeSidebar} setShowLoginModal={setShowLoginModal} setShowRegisterModal={setShowRegisterModal}/>
      
    </header>
  );
};

export default Header;
