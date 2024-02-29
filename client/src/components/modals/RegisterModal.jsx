// import RegisterForm from "../Register/RegisterForm";
import RegisterForm from "../forms/RegisterForm";

const RegisterModal = ({ visible, onClose }) => {


  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-slate-500 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="w-[95%] md:w-[60%] lg:w-[600px]  bg-white p-2 rounded h-[95vh] ">
        <div className="w-full flex flex-col justify-center items-center content-center ">
        <img className="absolute top-10 right-10 w-6 cursor-pointer sm:hidden" src="/cross-icon.svg" alt=" " onClick={() => {onClose()}} />
        <img src="/register.png" className="max-w-full h-auto w-[180px] lg:w-[320px] object-contain mb-2" />

          <h3 className="text-3xl font-semibold leading-10 text-center mb-2">
            Creá tu cuenta
          </h3>
          <RegisterForm onClose={onClose} />
          <p className="font-normal text-xs leading-5 text-center mb-1 lg:mb-2">
            Al continuar, aceptas nuestra Politica de privacidad y Términos de
            uso.
          </p>
          <p className="font-normal text-base leading-6">
            ¿Ya tenés una cuenta?
          </p>
          <button
            onClick={onClose}
            className="font-semibold text-base leading-6 underline"
          >
            Iniciá sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
