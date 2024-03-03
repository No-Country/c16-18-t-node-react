import { AuthContext } from "../auth/context/AuthContext.jsx";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Field, Form, Formik } from "formik";
import useCreateProduct from "../hooks/useCreateProduct";

const AgregarProductoPage = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [formEnviado, setFormEnviado] = useState(false);
  const [productError, setProductError] = useState(null);
  const { handleCreateProduct } = useCreateProduct();

  useEffect(() => {
    if (!user || user.rol !== "Vendedor") {
      const timeoutId = setTimeout(() => {
        navigate("/");
      }, 2000);

      return () => clearTimeout(timeoutId);
    }
  }, [user, navigate]);

  if (!user || user.rol !== "Vendedor") {
    return (
      <main className="flex flex-col px-8">
        <section className="py-12">
          <h1 className="mb-4 text-[2.625rem] text-darkGreen1 font-extrabold">
            Agregar productos
          </h1>
          <div className="flex flex-col gap-4 ml-8 text-lg">
            <p className="max-w-[55ch] leading-7">Accesso Denegado</p>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <>
        <main className="flex flex-col px-8">
          <section className="py-12">
            <h1 className="mb-4 text-[2.625rem] text-darkGreen1 font-extrabold">
              Agregar productos
            </h1>
            <div className="flex flex-col gap-4 ml-8 text-lg">
              <Formik
                initialValues={{
                  name: "",
                  price: "",
                  stock: "",
                  sku: "",
                  description: "",
                  rating: "",
                  category: "",
                  userId: user ? user.id : "",
                }}
                onSubmit={async (valores, { resetForm }) => {
                  try {
                    const {
                      name,
                      price,
                      stock,
                      sku,
                      description,
                      rating,
                      category,
                      userId,
                    } = valores;

                    const result = await handleCreateProduct({
                      name,
                      price,
                      stock,
                      sku,
                      description,
                      rating,
                      category,
                      userId,
                    });

                    console.log("Resultadoooooo", result);

                    resetForm();
                    setProductError(null);
                    setFormEnviado(true);
                  } catch (error) {
                    console.log(error);
                    setProductError(error);
                  }
                }}
              >
                {({ values, handleBlur }) => (
                  <Form className="flex w-full flex-col items-center px-6 md:px-2 lg:px-10">
                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm"
                        htmlFor="name"
                      >
                        Nombre:
                      </label>
                      <Field
                        type="text"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="name"
                        name="name"
                        placeholder="Ingrese el nombre"
                        value={values.name}
                        onBlur={handleBlur}
                      />

                      {productError &&
                        productError
                          .filter((error) => error.path === "name")
                          .map((error) => (
                            <div className="w-full h-5">
                              <div
                                className="flex justify-start text-red-600 text-sm"
                                key={error.name}
                              >
                                {error.msg}
                              </div>
                            </div>
                          ))}
                    </div>

                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm"
                        htmlFor="price"
                      >
                        Precio:
                      </label>
                      <Field
                        type="number"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="price"
                        name="price"
                        placeholder="Ingrese el precio"
                        value={values.price}
                        onBlur={handleBlur}
                      />

                      {productError &&
                        productError
                          .filter((error) => error.path === "price")
                          .map((error) => (
                            <div className="w-full h-5">
                              <div
                                className="flex justify-start text-red-600 text-sm"
                                key={error.price}
                              >
                                {error.msg}
                              </div>
                            </div>
                          ))}
                    </div>

                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm"
                        htmlFor="stock"
                      >
                        Stock:
                      </label>
                      <Field
                        type="number"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="stock"
                        name="stock"
                        placeholder="Ingrese el stock"
                        value={values.stock}
                        onBlur={handleBlur}
                      />
                      {productError &&
                        productError
                          .filter((error) => error.path === "stock")
                          .map((error) => (
                            <div className="w-full h-5">
                              <div
                                className="flex justify-start text-red-600 text-sm"
                                key={error.stock}
                              >
                                {error.msg}
                              </div>
                            </div>
                          ))}
                    </div>

                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm"
                        htmlFor="sku"
                      >
                        Sku:
                      </label>
                      <Field
                        type="number"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="sku"
                        name="sku"
                        placeholder="Ingrese el sku"
                        value={values.sku}
                        onBlur={handleBlur}
                      />
                      {productError &&
                        productError
                          .filter((error) => error.path === "sku")
                          .map((error) => (
                            <div className="w-full h-5">
                              <div
                                className="flex justify-start text-red-600 text-sm"
                                key={error.sku}
                              >
                                {error.msg}
                              </div>
                            </div>
                          ))}
                    </div>

                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm"
                        htmlFor="description"
                      >
                        Description:
                      </label>
                      <Field
                        type="text"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="description"
                        name="description"
                        placeholder="Ingrese la descripcion"
                        value={values.description}
                        onBlur={handleBlur}
                      />
                      {productError &&
                        productError
                          .filter((error) => error.path === "description")
                          .map((error) => (
                            <div className="w-full h-5">
                              <div
                                className="flex justify-start text-red-600 text-sm"
                                key={error.description}
                              >
                                {error.msg}
                              </div>
                            </div>
                          ))}
                    </div>

                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm"
                        htmlFor="rating"
                      >
                        Rating:
                      </label>
                      <Field
                        type="number"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="rating"
                        name="rating"
                        placeholder="Ingrese el rating"
                        value={values.rating}
                        onBlur={handleBlur}
                      />
                      {productError &&
                        productError
                          .filter((error) => error.path === "rating")
                          .map((error) => (
                            <div className="w-full h-5">
                              <div
                                className="flex justify-start text-red-600 text-sm"
                                key={error.rating}
                              >
                                {error.msg}
                              </div>
                            </div>
                          ))}
                    </div>

                    <div className="flex w-[50%] flex-col">
                      <label
                        className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm "
                        htmlFor="category"
                      >
                        Categoría:
                      </label>
                      <Field
                        as="select"
                        className="w-full py-1 px-4 border border-gray rounded-lg"
                        id="category"
                        name="category"
                        onBlur={handleBlur}
                      >
                        <option value="" label="Seleccione una categoría" />
                        {/* {categories.map((category) => (
                          <option key={category._id} value={category.name}>
                            {category.name}
                          </option>
                        ))} */}
                      </Field>
                    </div>

                    <div className="w-[70%] lg:w-[55%] flex items-center justify-center">
                      <button
                        type="submit"
                        className="mt-1 sm:mt-4 mb-0 sm:mb-2 py-4 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
                      >
                        Crear Producto
                      </button>
                    </div>

                    <div className="w-full h-5 mt-1 sm:mt-0 sm:h-10 flex items-center justify-center">
                      {formEnviado ? (
                        <p className="flex justify-start text-green-500 text-sm">
                          Producto creado exitosamente!
                        </p>
                      ) : null}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </section>
        </main>
      </>
    );
  }
};

export default AgregarProductoPage;
