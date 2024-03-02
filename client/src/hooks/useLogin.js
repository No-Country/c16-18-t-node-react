import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";


const useLogin = () => {
      const {login} = useContext(AuthContext);
    const handleLogin = async(data) => {
      try {
        const response = await fetch('http://localhost:3000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        const responseData = await response.json();
        console.log("Respuesta erronea", responseData.message)
        if (!response.ok) {
          throw new Error(responseData.message || 'Credenciales inválidas');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }
        console.log("Respuesta erronea", responseData.rol)

        if(responseData.name){
          login(responseData.id, responseData.name, responseData.rol, responseData.email);
        }
        return responseData;
      } catch (error) {
        console.log(error)
        throw new Error(error.message);
      }
  
    }
    
    return {
      handleLogin
    };
  }
  
  export default useLogin
  