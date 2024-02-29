import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import useRegister from "../../hooks/useRegister";

const RegisterForm = ({ onClose }) => {
  const [formEnviado, setFormEnviado] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { handleRegister } = useRegister();
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        password: "",
        password_confirmation: "",
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.name) {
          errores.name = "Nombre inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.name)) {
          errores.name = "Sólo inserte letras y espacios";
        }
        if (!valores.surname) {
          errores.surname = "Apellido inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.surname)) {
          errores.surname = "Sólo inserte letras y espacios";
        }
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
        if (!valores.password_confirmation) {
          errores.password_confirmation = "Confirme su contraseña";
        } else if (valores.password !== valores.password_confirmation) {
          errores.password_confirmation = "No coincide con su contraseña";
        }

        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        try {
          const {name, email, password } = valores;
          const result = await handleRegister({
            username: name,
            email,
            password,
            confirmPassword: password
          });
          console.log("Result", result);
          resetForm();
          setLoginError(null);
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
            onClose();
          }, 2000);
        } catch (error) {
          setLoginError(error.message);
        }
      }}
    >
      {({ values, handleBlur }) => (
        <Form className="flex w-full flex-col items-center sm:pt-3 px-6 md:px-2 lg:px-10  ">
          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="name"
              >
                Nombre
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg "
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                value={values.name}
                onBlur={handleBlur}
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="name"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-[45%]">
              <label
                className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm "
                htmlFor="surname"
              >
                Apellido
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg"
                id="surname"
                name="surname"
                placeholder="Ingrese su apellido"
                value={values.surname}
                onBlur={handleBlur}
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="surname"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>
          </div>
          <div className="flex w-[95%] flex-col">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm "
              htmlFor="email"
            >
              Email:
            </label>
            <Field
              type="email"
              className="w-full    py-1 px-4 border border-gray rounded-lg"
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
          <div className="flex w-[95%] flex-col ">
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

          <div className="flex w-[95%] flex-col ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm  "
              htmlFor="password_confirmation"
            >
              Confirmación
            </label>
            <Field
              type="password"
              className="w-full py-1 px-4 border border-gray rounded-lg "
              id="password_confirmation"
              name="password_confirmation"
              placeholder="Confirme su contraseña"
              value={values.password_confirmation}
              onBlur={handleBlur}
            />
            <div className="w-full h-5">
              <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="password_confirmation"
                component="div"
              ></ErrorMessage>
            </div>
          </div>

          <div className="w-[70%] lg:w-[55%] flex items-center justify-center ">
            <button
              type="submit"
              className="mt-4 mb-2 py-4 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6 "
            >
              Registrarse
            </button>
          </div>
        <div className="w-full h-10 flex items-center justify-center ">
        {formEnviado && (
            <p className="flex justify-start text-green-500 text-sm ">
              Registrado exitosamente! Email de confirmacion enviado!
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

export default RegisterForm;

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
