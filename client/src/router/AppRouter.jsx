import { Navigate, Route, Routes } from 'react-router-dom'
import LandingPage from '../Pages/LandingPage'
import AboutPage from '../Pages/AboutPage'
import ContactPage from '../Pages/ContactPage'
import UserProfilePage from '../Pages/UserProfilePage'

const AppRouter = () => {

    // Aca obtenemos el status en base a un estado global de la aplicacion
    const status = 'not-authorized'; // || 'authorized' 

  return (
    <Routes>
        <>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Si esta loggeado, mostrar el componente de comercios cercanos */}
            <Route path="/profile" element={<UserProfilePage />} />
            <Route  path='/*' element={<Navigate to='/'/>} />
        </>

    </Routes>
  )
}

export default AppRouter