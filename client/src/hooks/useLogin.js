import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";


const useLogin = () => {
      const {login} = useContext(AuthContext);
    const handleLogin = async(data) => {
      try {
        const response = await fetch('https://c16-18-t-node-react.onrender.com/api/login', {
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
        
        if(responseData.username){
          login(responseData.id, responseData.username);
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
  