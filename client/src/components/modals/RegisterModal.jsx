// import RegisterForm from "../Register/RegisterForm";
import RegisterForm from "../forms/RegisterForm";

const RegisterModal = ({ visible, onClose }) => {
  // const [nombre, setNombre] = useState("");
  // const [password, setpassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [apellido, setApellido] = useState("");

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
      <div className="bg-white p-2 rounded h-[95vh]">
        <div className=" flex flex-col justify-center items-center content-center  mx-6">
          <img
            src="/register.png"
            className="w-[428px] h-[241px] object-contain mb-4"
          ></img>
          <h3 className="text-3xl font-semibold leading-10 text-center mb-6">
            Creá tu cuenta
          </h3>
          <RegisterForm onClose={onClose} />
          {/* <Formik>

            <div className="flex">
              <div className="flex flex-col mr-4">
                <span className="font-bold text-base leading-6">Nombre</span>
                <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                  ></input>
                </label>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base leading-6">Apellido</span>
                <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
                  <input
                    type="text"
                    value={apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    placeholder="Apellido"
                  ></input>
                </label>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <span className="font-bold text-base leading-6">
                Correo electrónico
              </span>
              <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="porejemplo@gmail.com"
                ></input>
              </label>
            </div>

            <div className="flex flex-col mt-4">
              <span className="font-bold text-base leading-6">Contraseña</span>
              <label className="mt-1 py-2 px-4 border border-gray rounded-lg flex justify-between">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  placeholder="********"
                />
                <button>
                  <img src="/visibility.svg"></img>
                </button>
              </label>
            </div>
            <div className="flex flex-col mt-4">
              <span className="font-bold text-base leading-6">
                Confirmar contraseña
              </span>
              <label className="mt-1 py-2 px-4 border border-gray rounded-lg flex justify-between">
                <input placeholder="********"></input>
                <button>
                  <img src="/visibility.svg"></img>
                </button>
              </label>
            </div>

            <button
              type="submit"
              className="mx-10 mt-12 mb-3 py-4 px-10 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
              // onClick={handleRegister}
            >
              Continuar
            </button>
          </Formik> */}
          <p className="font-normal text-xs leading-5 text-center mb-6">
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
