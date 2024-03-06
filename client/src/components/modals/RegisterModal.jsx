import RegisterForm from "../forms/RegisterForm";

const RegisterModal = ({ visible, onClose }) => {

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  
  return (
    <div id="container" onClick={handleOnClose} className={`${visible ? 'flex' : 'hidden'} fixed top-0 z-50 w-full h-full p-4 bg-grayishGreen4 bg-opacity-75 lg:justify-center lg:items-center`}>
      <div className="relative flex flex-col items-center h-full py-12 bg-white rounded-md overflow-y-scroll scroll-smooth lg:h-auto">
        <img className="absolute top-4 left-4 w-6 cursor-pointer" src="/cross-icon.svg" alt=" " onClick={() => {onClose()}} />
        <img src="/register.png" className="w-[210px] h-[120px] object-contain" />
        <h3 className="text-xl mb-0 lg:text-3xl font-semibold leading-10 text-center lg:mb-2">
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
  );
};

export default RegisterModal;
