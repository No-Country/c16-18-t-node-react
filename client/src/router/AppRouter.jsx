import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import AboutPage from "../Pages/AboutPage";
import ContactPage from "../Pages/ContactPage";
import UserProfilePage from "../Pages/UserProfilePage";
import ResultPage from "../Pages/ResultsPage";
import CartPage from "../Pages/CartPage";
import MisProductosPage from "../Pages/MisProductosPage";
import AgregarProductoPage from "../Pages/AgregarProductoPage";
import PurchaseSuccessPage from "../Pages/PurchaseSuccessPage";
import { AuthContext } from "../auth/context/AuthContext";
import { useContext } from "react";
import ConfirmUserPage from "../Pages/ConfirmUserPage";

const AppRouter = ({ data, searchedInput, handleSearch }) => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <>
        <Route path="/" element={<LandingPage data={data} handleSearch={handleSearch} />}/>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/misproductos" element={<MisProductosPage />} />
        <Route path="/agregarproducto" element={<AgregarProductoPage />} />
        <Route path="/results" element={<ResultPage searchedInput={searchedInput}  handleSearch={handleSearch}/>} />
        {/* Si esta loggeado, mostrar el componente de comercios cercanos */}
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/confirm-user" element={<ConfirmUserPage />} />  
        <Route
          path="/results"
          element={
            <ResultPage
              searchedInput={searchedInput}
              handleSearch={handleSearch}
            />
          }
        />
        {user && (
          <>
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/purchase-success" element={<PurchaseSuccessPage />} />
          </>
        )}
        <Route path="/*" element={<Navigate to="/" />} />
      </>
    </Routes>
  );
};

export default AppRouter;
