import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/AppRouter"

const App = () => {
    return (
        <BrowserRouter>
        <Header/>
        <AppRouter/>
        <Footer/>
        </BrowserRouter>
    )
}

export default App