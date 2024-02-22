import { useState } from "react";

const LocationFormModal = ({ onClose, visible }) => {

    const [getCoordinates, setGetCoordinates] = useState(null); // [latitud, longitud
  const handleOnClose = () => {
    setGetCoordinates(null)
     onClose();
  };
  if (!visible) return null;

  const getUbication = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitud = position.coords.latitude;
            const longitud = position.coords.longitude;
            
            console.log("Ubicación obtenida:", latitud, longitud);
            setGetCoordinates([latitud, longitud]);
        }, function(error) {
            console.error("Error al obtener la ubicación:", error.message);
        });
    } else {
        console.error("Geolocalización no soportada por este navegador");
    }
  }

  return (
    <div
      className="fixed inset-0 bg-slate-500 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-10"
    >
      <div className="bg-white px-8  rounded h-[90vh]">
        <button className="relative top-8 w-[24px]" onClick={handleOnClose}>
            <img   src="/cross-icon.svg" alt="" />
        </button>
        <div className=" flex flex-col justify-center items-center content-center  mx-6 py-16">
          <h3 className="text-4xl font-extrabold leading-10 text-center mb-6">
            Ingresa a tu ubicación
          </h3>

          <form className="flex flex-col">
            <div className="flex flex-col mt-4">
              <label className="mt-1 py-2 px-4 border border-gray rounded-3xl flex justify-between">
                <input
                  className="w-full focus:outline-none"
                  placeholder="Dirección o punto de referencia"
                ></input>
                <button>
                  <img src="/location-icon2.svg"></img>
                </button>
              </label>
            </div>
            <div className="flex">
              <button className="flex items-center justify-center text-xl font-semibold mt-4 hover:underline" onClick={() => getUbication()}>
                <img className="mr-2" src="/ubication-icon.svg" />
                Mi ubicación actual
              </button>

                   
            </div>
            {getCoordinates && <span className="text-darkGreen2 my-2 text-xl">Mi ubicación: {getCoordinates[0]}, {getCoordinates[1]}</span>}  

            <hr className="my-6" />
            <button
              type="submit"
              className="mx-10 mt-12 mb-3 py-4 px-10 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
              onClick={handleOnClose}
            >
              Continuar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LocationFormModal;
