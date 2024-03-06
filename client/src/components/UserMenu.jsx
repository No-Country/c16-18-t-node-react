import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";

const UserMenu = ({ isOpen }) => {
  const { user } = useContext(AuthContext);

  if (user && user.rol === "Vendedor") {
    return (
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full z-50 py-8 w-[120%] bg-[#f7f7f8]`}
      >
        <ul>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/"
            >
              <img src="/home-icon.svg" alt=" " /> Home
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/profile"
            >
              <img src="/profile-icon.svg" alt=" " /> Perfil
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/usermessages"
            >
              <img src="/message-icon.svg" alt=" " /> Mensajes
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/misproductos"
            >
              <img src="/order-icon.svg" alt=" " /> Mis productos
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/agregarproducto"
            >
              <img src="/order-icon.svg" alt=" " /> Agregar productos
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/config"
            >
              <img src="/settings-icon.svg" alt=" " /> Configuración
            </NavLink>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-full z-50 py-8 w-[120%] bg-[#f7f7f8]`}
      >
        <ul>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/"
            >
              <img src="/home-icon.svg" alt=" " /> Home
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/profile"
            >
              <img src="/profile-icon.svg" alt=" " /> Perfil
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/usermessages"
            >
              <img src="/message-icon.svg" alt=" " /> Mensajes
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/cart"
            >
              <img src="/order-icon.svg" alt=" " /> Mis pedidos
            </NavLink>
          </li>
          <li className="pl-4 hover:font-bold hover:bg-gradient-to-r from-grayishGreen4 to-25%">
            <NavLink
              className="flex items-center gap-4 py-4 px-8 text-darkGreen1 hover:text-avocadoGreen"
              to="/config"
            >
              <img src="/settings-icon.svg" alt=" " /> Configuración
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
};

export default UserMenu;
