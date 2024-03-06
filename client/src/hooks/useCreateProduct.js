
const useCreateProduct = () => {
  const handleCreateProduct = async(data) => {
    try {
      const response = await fetch('https://c16-18-t-node-react-1.onrender.com/api/products', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const responseData = await response.json();
      if (!response.ok) {
        console.log(responseData.payload)
        throw responseData.payload
      }
      return responseData;
    } catch (error) {
      throw error;
    }
  }
  return {
    handleCreateProduct
  };
}

export default useCreateProduct
