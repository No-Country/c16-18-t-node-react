
const useRegister = () => {
  const handleRegister = async(data) => {
    
    try {
      const response = await fetch('https://c16-18-t-node-react.onrender.com/api/register', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      console.log("response", response)
      if (!response.ok) {
        throw new Error('Error en la respuesta. ', response.status);
      }
      const responseData = await response.json();
      console.log(responseData)
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
