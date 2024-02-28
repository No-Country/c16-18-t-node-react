import { useState } from "react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import AppRouter from "./router/AppRouter"
import { AuthProvider } from "./auth/context/AuthProvider"
import useSWR from "swr"
import axios from "axios"

const fetcher = url => axios.get(url).then(res => res.data);


const App = () => {
    const [searchedData, setSearchedData] = useState([]); 
    const {data} = useSWR('https://c16-18-t-node-react.onrender.com/api/products', fetcher);
    console.log(data);

    const handleSearch = (searchRef, inputValue, setInputValue) => {
        const temp = data ? data.filter((item) => item.payload.name.contains(inputValue)) : [];
        setSearchedData(temp)
        searchRef.current.value = "";
        setInputValue("");
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

export default App;
