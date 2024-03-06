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
        lastname: "",
        rol:"Cliente",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.name) {
          errores.name = "Nombre inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.name)) {
          errores.name = "Sólo inserte letras y espacios";
        }
        if (!valores.lastname) {
          errores.lastname = "Apellido inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.lastname)) {
          errores.lastname = "Sólo inserte letras y espacios";
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
        if (!valores.confirmPassword) {
          errores.confirmPassword = "Confirme su contraseña";
        } else if (valores.password !== valores.confirmPassword) {
          errores.confirmPassword = "No coincide con su contraseña";
        }

        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        console.log(valores)
        try {
          const {name, email, password, lastname, rol, confirmPassword } = valores;
          const result = await handleRegister({
            name,
            lastname,
            rol,
            email,
            password,
            confirmPassword

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
        <Form className="flex w-full flex-col items-center px-6 md:px-2 lg:px-10 ">
          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="name"
              >
                Nombre:
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
                htmlFor="lastname"
              >
                Apellido:
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg"
                id="lastname"
                name="lastname"
                placeholder="Ingrese su apellido"
                value={values.lastname}
                onBlur={handleBlur}
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="lastname"
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
          <div className="flex w-[95%] flex-col">
          <label id="rol" className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm">Tipo de usuario:</label>
          <div role="group" className="w-[80%] flex items-center justify-around" aria-labelledby="rol">
            <label className="px-1">
              <Field type="radio" name="rol" value="Cliente"/>
              Cliente
            </label>
            <label>
              <Field type="radio" name="rol" value="Vendedor" />
              Vendedor
            </label>
            <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="rol"
                component="div"
              ></ErrorMessage>
          </div>
          </div>
          <div className="flex w-[95%] flex-col ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm  "
              htmlFor="password"
            >
              Contraseña:
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
              htmlFor="confirmPassword"
            >
              Confirmación:
            </label>
            <Field
              type="password"
              className="w-full py-1 px-4 border border-gray rounded-lg "
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme su contraseña"
              value={values.confirmPassword}
              onBlur={handleBlur}
            />
            <div className="w-full h-5">
              <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="confirmPassword"
                component="div"
              ></ErrorMessage>
            </div>
          </div>

          <div className="w-[70%] lg:w-[55%] flex items-center justify-center ">
            <button
              type="submit"
              className="mt-1 sm:mt-4 mb-0 sm:mb-2 py-4 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6 "
            >
              Registrarse
            </button>
          </div>
        <div className="w-full h-5 mt-1 sm:mt-0 sm:h-10 flex items-center justify-center ">
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
