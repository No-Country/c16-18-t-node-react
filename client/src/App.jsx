import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./auth/context/AuthProvider";

const App = () => {
  const [searchedInput, setSearchedInput] = useState("");

  const handleSearch = (searchRef, inputValue, setInputValue) => {
    setSearchedInput(inputValue);
    searchRef.current.value = "";
    setInputValue("");
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <AppRouter searchedInput={searchedInput} handleSearch={handleSearch} />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
