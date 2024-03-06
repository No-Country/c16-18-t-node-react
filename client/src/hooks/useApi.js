import { postData, getData } from "./useFetch";
import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const useProduct = () => {
  const handleGetProducts = async () => {
    return await getData("products", null);
  };

  const handleCreateProduct = async (data) => {
    return await postData("products", "POST", data);
  };

  return {
    handleGetProducts,
    handleCreateProduct,
  };
};

const useBusiness = () => {
  const handleGetBusiness = async () => {
    return await getData("business", null);
  };

  const handleGetMyBusines = async (data) => {
    return await getData("business", data);
  };

  return {
    handleGetBusiness,
    handleGetMyBusines,
  };
};

const useCategories = () => {
  const handleGetCategories = async () => {
    return await getData("productType", null);
  };


  return {
    handleGetCategories,
  };
};

const useAuth = () => {
  const { login } = useContext(AuthContext);
  const handleRegister = async (data) => {
    return await postData("register", "POST", data);
  };

  const handleLogin = async (data) => {
    const responseData = await postData("login", "POST", data);
    console.log(responseData);
    login(
      responseData.id,
      responseData.name,
      responseData.rol,
      responseData.email,
      responseData.avatar
    );
    return responseData;
  };

  return {
    handleRegister,
    handleLogin,
  };
};

export { useAuth, useProduct, useBusiness, useCategories };
