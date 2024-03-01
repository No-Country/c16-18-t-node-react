import { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({isOpenMenu, onClose, setShowLoginModal, setShowRegisterModal}) => {

    useEffect(() => {
        if (isOpenMenu) {
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      }, [isOpenMenu]);

      const loginSideBar = () => {
        setShowLoginModal(true);
        onClose();
      }
      const registerSideBar = () => {
        setShowRegisterModal(true);
        onClose();
      } 
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-full max-h-min mt-20 bg-sidebarWhite bg-opacity-90 text-darkGreen1 p-4 transform ${isOpenMenu ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'}`} >
      <ul className="mt-4">
        <li className="mb-2">
          <Link to="/" className="block p-2 font-bold sm:font-extrabold sm:text-2xl text-darkGreen1 hover:underline w-fit " onClick={() => onClose()}>Home</Link>
        </li>
        <li className="mb-2">
          <Link to="about" className="block p-2 font-bold sm:font-extrabold sm:text-2xl text-darkGreen1 hover:underline w-fit" onClick={() => onClose()}>Sobre Nosotros</Link>
        </li>
        <li className="mb-2">
          <Link to="/profile" className="block p-2 font-bold sm:font-extrabold sm:text-2xl text-darkGreen1  hover:underline w-fit" onClick={() => onClose()}>Perfil</Link>
        </li>
        <li className="mb-2">
          <Link to="/contact" className="block p-2 font-bold sm:font-extrabold sm:text-2xl text-darkGreen1  hover:underline w-fit" onClick={() => onClose()}>Contacto</Link>
        </li>
      </ul>
      <div className="w-full h-32 flex flex-col items-center justify-around ">
      <a
  onClick={() => loginSideBar()}
  className="text-darkGreen1 font-bold px-6 py-3 border outline-1 rounded-full w-36 h-12 text-center"
  href="#"
>
  Inicia Sesión
</a>
<a
  onClick={() => registerSideBar()}
  className="px-6 py-3 bg-grayishGreen3 rounded-full font-bold w-36 h-12 text-center"
  href="#"
>
  Registrate
</a>
              </div>
    </div>
  )
}

export default Sidebar
