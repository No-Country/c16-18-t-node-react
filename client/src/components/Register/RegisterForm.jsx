const RegisterForm = () => {
  return (
    <form>
      <div className="flex">
        <div className="flex flex-col mr-4">
          <span className="font-bold text-base leading-6">Nombre</span>
          <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
            <input placeholder="Nombre"></input>
          </label>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-base leading-6">Apellido</span>
          <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
            <input placeholder="Apellido"></input>
          </label>
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <span className="font-bold text-base leading-6">
          Correo electrónico
        </span>
        <label className="mt-1 py-2 px-4 border border-gray rounded-lg">
          <input placeholder="porejemplo@gmail.com"></input>
        </label>
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
      >
        Continuar
      </button>
    </form>
  );
};

export default RegisterForm;
