import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import UserProfilePage from '../Pages/UserProfilePage'
import ResultPage from '../Pages/ResultsPage'
import CartPage from "../Pages/CartPage";

const AppRouter = ({data , searchedData, handleSearch}) => {
  // Aca obtenemos el status en base a un estado global de la aplicacion
  // const status = "not-authorized"; 

  return (
    <Routes>
      <>
        <Route path="/" element={<LandingPage data={data} handleSearch={handleSearch}/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/results" element={<ResultPage searchedData={searchedData}  handleSearch={handleSearch}/>} />
        {/* Si esta loggeado, mostrar el componente de comercios cercanos */}
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </>

    </Routes>
  );
};

export default AppRouter;
