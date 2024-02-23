import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"

const App = () => {
    return (
        <AuthProvider>
|           <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
            </BrowserRouter>
        </AuthProvider>

    )
}

export default App