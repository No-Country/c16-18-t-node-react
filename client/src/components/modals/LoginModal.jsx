import LoginForm from "../forms/LoginForm";

const LoginModal = ({ visible, onClose }) => {

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };


  return (
    <div
      id="container"
      onClick={handleOnClose}
      className={`${visible ? 'flex' : 'hidden'} fixed top-0 z-50 justify-center items-center w-full h-full p-4 bg-grayishGreen4 bg-opacity-75`}
    >
      <div className="relative flex flex-col justify-center items-center w-full pt-12 bg-white rounded-md lg:w-auto">
          <img className="absolute top-4 left-4 w-6 cursor-pointer" src="/cross-icon.svg" alt=" " onClick={() => {onClose()}} />
          <img
            src="/register.png"
            className="w-[210px] h-[120px] lg:w-[428px] lg:h-[241px] object-contain mb-4"
          />
          <h3 className="text-3xl font-semibold leading-10 text-center mb-6">
            Iniciar sesión
          </h3>
          <LoginForm onClose={onClose}></LoginForm>
        </div>
    </div>
  );
};

export default LoginModal;
