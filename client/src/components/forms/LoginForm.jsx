import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const LoginForm = ({ onClose }) => {
  const [formEnviado, setFormEnviado] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { handleLogin } = useLogin();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.email) {
          errores.email = "Ingrese un email válido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)
        ) {
          errores.email = "Email inválido";
        }
        if (!valores.password) {
          errores.password = "Ingrese una contraseña válida.";
        } else if (valores.password.length < 6) {
          errores.password = "Contraseña corta. Caracteres mínimos: 6";
        }

        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        try {
          const result = await handleLogin(valores);
          console.log(result.message);
          resetForm();
          setLoginError(null);
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
            onClose();
          }, 1000);
          console.log(valores);
        } catch (error) {
          console.log("Error al iniciar sesion", error.message);
          setLoginError(error.message);
        }
      }}
    >
      {({ values, handleBlur }) => (
        <Form className="flex w-full flex-col items-center  sm:w-[80%] sm:pt-3 px-10 ">
          <div className="flex w-full flex-col lg:w-[80%]   ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm "
              htmlFor="email"
            >
              Email:
            </label>
            <Field
              type="email"
              className="w-full   py-1 px-4 border border-gray rounded-lg"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              value={values.email}
              onBlur={handleBlur}
            />
            <div className="w-full h-5">
              <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="email"
                component="div"
              ></ErrorMessage>
            </div>
          </div>
          <div className="flex w-full flex-col  lg:w-[80%]  ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm  "
              htmlFor="password"
            >
              Contraseña
            </label>
            <Field
              type="password"
              className="w-full   py-1 px-4 border border-gray rounded-lg "
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={values.password}
              onBlur={handleBlur}
            />
            <div className="w-full h-5">
              <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="password"
                component="div"
              ></ErrorMessage>
            </div>
          </div>

          <div className="w-[70%] lg:w-[55%] flex items-center justify-center  ">
            <button
              type="submit"
              className="mt-4 mb-3 py-4 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="w-full h-10 flex items-center justify-center ">
            {formEnviado && (
              <p className="flex justify-start text-green-500 text-sm">
                Sesión iniciada exitosamente!
              </p>
            )}
            {loginError && (
              <p className="flex justify-start text-red-600 text-sm">
                {loginError}
              </p>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

// catch (error) {
//   if (error.response && error.response.payload && error.response.payload.msg) {
//     throw new Error(error.response.payload.msg);
//   } else {
//     throw error;
//   }

{
  /* <div className="flex">
<div className="flex flex-col mr-4">
  <span className="font-bold text-base leading-6">Nombre</span>
  <label className=" py-1 px-4 border border-gray rounded-lg">
    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre"></input>
  </label>
</div>
<div className="flex flex-col">
  <span className="font-bold text-base leading-6">Apellido</span>
  <label className="mt-1 py-1 px-4 border border-gray rounded-lg">
    <input type="text" value={apellido} onChange={e => setApellido(e.target.value)} placeholder="Apellido"></input>
  </label>
</div>
</div>

<div className="flex flex-col mt-4">
<span className="font-bold text-base leading-6">
  Correo electrónico
</span>
<label className="mt-1 py-1 px-4 border border-gray rounded-lg">
  <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="porejemplo@gmail.com"></input>
</label>
</div>

<div className="flex flex-col mt-4">
<span className="font-bold text-base leading-6">Contraseña</span>
<label className="mt-1 py-1 px-4 border border-gray rounded-lg flex justify-between">
  <input type="password" value={password} onChange={e => setpassword(e.target.value)} placeholder="********" />
  <button>
    <img src="/visibility.svg"></img>
  </button>
</label>
</div>
<div className="flex flex-col mt-4">
<span className="font-bold text-base leading-6">
  Confirmar contraseña
</span>
<label className="mt-1 py-2 px-4 border border-gray rounded-lg flex justify-between">
  <input placeholder="********"></input>
  <button>
    <img src="/visibility.svg"></img>
  </button>
</label>
</div>

<button
type="submit"
className="mx-10 mt-12 mb-3 py-4 px-10 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
onClick={handleRegister}
>
Continuar
</button> */
}
