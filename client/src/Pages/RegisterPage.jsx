import RegisterForm from "../components/Register/RegisterForm"

const RegisterPage = () => {
  return (
    <section className=" flex flex-col justify-center items-center content-center my-8 mx-6">
        <img src="/register.png" className="w-[428px] h-[241px] object-contain mb-4"></img>
        <h3 className="text-3xl font-semibold leading-10 text-center mb-6">Creá tu cuenta</h3>
        <RegisterForm/>
        
        <p className="font-normal text-xs leading-5 text-center mb-6">Al continuar, aceptas nuestra Politica de privacidad y Términos de uso.</p>
        <p className="font-normal text-base leading-6">¿Ya tenés una cuenta?</p>
        <p className="font-semibold text-base leading-6 underline">Iniciá sesión</p>
    </section>
  )
}

export default RegisterPage