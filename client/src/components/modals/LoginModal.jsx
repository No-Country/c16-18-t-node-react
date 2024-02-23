import { useContext } from "react";
import { AuthContext } from "../../auth/context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginModal = ({ visible, onClose }) => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  const handleLogin = () => {
    login('Julio Rossi');
    navigate('/');
  }

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-slate-500 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="bg-white p-2 rounded h-[95vh]">
        <div className=" flex flex-col justify-center items-center content-center  mx-6">
          <h3 className="text-3xl font-semibold leading-10 text-center mb-6">
            Iniciar sesión
          </h3>
          <form>
            <div className="flex">
              <div className="flex flex-col mr-4">
                <span className="font-bold text-base leading-6">Nombre</span>
                <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
                  <input placeholder="Nombre"></input>
                </label>
              </div>
            </div>
            <div className="flex flex-col mt-4">
              <span className="font-bold text-base leading-6">Contraseña</span>
              <label className="mt-1 py-2 px-4 border border-gray rounded-lg flex justify-between">
                <input placeholder="********" />
                <button>
                  <img src="/visibility.svg"></img>
                </button>
              </label>
            </div>
            <button
              
              className="mx-10 mt-12 mb-3 py-4 px-10 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
              onClick={handleLogin}
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
