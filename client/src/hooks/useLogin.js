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
        if (!response.ok) {
          throw new Error(responseData.message || 'Credenciales inválidas');
        }
  
        if (responseData.error) {
          throw new Error(responseData.error);
        }

        if(response.ok){
          login(responseData.id, responseData.name, responseData.rol, responseData.email, responseData.avatar);
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
  