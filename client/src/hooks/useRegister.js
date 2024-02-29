// import { useContext } from "react";
// import { AuthContext } from "../auth/context/AuthContext";


const useRegister = () => {
  // const {login} = useContext(AuthContext);
  const handleRegister = async(data) => {
    
    try {
      const response = await fetch('https://c16-18-t-node-react.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if (!response.ok) {
        throw new Error('El email ya se encuentra registrado. Por favor, intente con otro email.');
      }
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.log("useregister", error)
      throw new Error(error.message);
    }

  }

  return {
    handleRegister
  };
}

export default useRegister
