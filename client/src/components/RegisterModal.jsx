import RegisterForm from "./Register/RegisterForm";

const RegisterModal = ({visible, onClose}) => {

  const handleOnClose = (e) => {
    if(e.target.id === "container") onClose();
  }

  if(!visible) return null;
  return (
    <div id="container" onClick={handleOnClose} className="fixed inset-0 bg-slate-500 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="bg-white p-2 rounded h-[95vh]">
      <div className=" flex flex-col justify-center items-center content-center  mx-6">
        <img
          src="/register.png"
          className="w-[428px] h-[241px] object-contain mb-4"
        ></img>
        <h3 className="text-3xl font-semibold leading-10 text-center mb-6">
          Creá tu cuenta
        </h3>
        <RegisterForm />
        <p className="font-normal text-xs leading-5 text-center mb-6">
          Al continuar, aceptas nuestra Politica de privacidad y Términos de
          uso.
        </p>
        <p className="font-normal text-base leading-6">¿Ya tenés una cuenta?</p>
        <button onClick={onClose} className="font-semibold text-base leading-6 underline">
          Iniciá sesión
        </button>
      </div>
      </div>
    </div>
  );
};

export default RegisterModal;
