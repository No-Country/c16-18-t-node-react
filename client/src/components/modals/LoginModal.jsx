// import { useContext } from "react";
// import { AuthContext } from "../../auth/context/AuthContext";
// import { useNavigate } from "react-router-dom";
import LoginForm from "../forms/LoginForm";

const LoginModal = ({ visible, onClose }) => {

  // const {login} = useContext(AuthContext);
  // const navigate = useNavigate();
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="w-full fixed inset-0 bg-slate-500 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="w-[90%] md:w-[60%] lg:w-[45%] xl:w-[35%] bg-white p-2 rounded h-[95vh]">
        <div className="w-full flex flex-col justify-center items-center content-center">
        <img className="absolute top-10 right-10 w-6 cursor-pointer sm:hidden" src="/cross-icon.svg" alt=" " onClick={() => {onClose()}} />
        <img
            src="/register.png"
            className="w-[210px] h-[120px] lg:w-[428px] lg:h-[241px] object-contain mb-4"
          ></img>
          <h3 className="text-3xl font-semibold leading-10 text-center mb-6">
            Iniciar sesión
          </h3>
          <LoginForm onClose={onClose}></LoginForm>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
