const BASE_URL = "https://c16-18-t-node-react-1.onrender.com/api"

const getData = async (url, params) => {
  try {
    const fullUrl = params
      ? `${BASE_URL}/${url}${params}`
      : `${BASE_URL}/${url}`;
    const response = await fetch(fullUrl);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.log("Error en la solicitud");
    }
  } catch (error) {
    console.log("Error de red:", error);
    throw new Error(error);
  }
};

const postData = async (url, method, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    
    const responseData = await response.json();
    console.log(responseData);
    if (!response.ok) {
      throw responseData.payload
    }

    return responseData;
  } catch (error) {
    throw error
  }
};

export { postData, getData };
