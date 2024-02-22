import { useState } from "react";
import LocationFormModal from "./LocationFormModal";

const Searchbar = () => {
  const [showLocationFormModal, setShowLocationFormModal] = useState(false);
  const handleCloseLocationFormModal = () => {
    setShowLocationFormModal(false);
  };

  return (
      <div className="relative">
        <input
          className="p-4 rounded-full w-full"
          type="text"
          placeholder="Veamos que tenes cerca"
          onClick={() => setShowLocationFormModal(true)}
        />
        <button
          className="absolute top-0 right-0 px-6 py-4 font-bold bg-grayishGreen3 rounded-full"
          type="button"
        >
          Buscar
        </button>
        <LocationFormModal
        visible={showLocationFormModal}
        onClose={handleCloseLocationFormModal}
      />
      </div>
      
  );
};

export default Searchbar;
