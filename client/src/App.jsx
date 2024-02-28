import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"

const App = () => {
    const [searchInput, setSearchedData] = useState(""); //como las searchbars son componentes reciclados 
                                                        //nesesitan tener un state en el componente mas alto

    const handleSearch = (inputValue) => {
        setSearchedData(inputValue);
    }

    return (
        <AuthProvider>
            <BrowserRouter>
                <Header/>
                    <AppRouter searchInput={searchInput} handleSearch={handleSearch}/>
                <Footer/>
            </BrowserRouter>
        </AuthProvider>

    )
}

export default App