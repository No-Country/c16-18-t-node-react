import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"

const App = () => {
    const [searchInput, setSearchedData] = useState(""); 

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