import { useState, useRef } from "react";
import { Link } from "react-router-dom"
import LocationFormModal from "./modals/LocationFormModal";

const Searchbar = ({handleSearch}) => {
  const [showLocationFormModal, setShowLocationFormModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const searchRef = useRef(null);

  const handleCloseLocationFormModal = () => {
    setShowLocationFormModal(false);
  };

  return (
      <div className="relative">
        <input
          className="p-4 rounded-full w-full border border-grayishGreen4 outline-grayishGreen3 caret-grayishGreen3"
          type="text"
          placeholder="Veamos que tenes cerca"
          //onClick={() => setShowLocationFormModal(true)}
          ref={searchRef}
          onChange={(e) => {setInputValue(e.target.value)}}
        />
        <Link to={"/results"}
          className="absolute top-[1px] right-[1px] px-6 py-4 font-bold bg-grayishGreen3 rounded-full"
          onClick={() => {handleSearch(inputValue)}}
        >
          Buscar
        </Link>
        <LocationFormModal
        visible={showLocationFormModal}
        onClose={handleCloseLocationFormModal}
      />
      </div>
      
  );
};

export default Searchbar;
