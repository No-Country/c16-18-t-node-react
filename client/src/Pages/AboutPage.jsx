const AboutPage = () => {
  return (
    <main className="flex flex-col gap-12 px-4 pt-24 pb-6 lg:px-8 lg:py-6">
      <section>
        <h1 className="mb-4 text-[2.625rem] text-darkGreen1 text-center font-extrabold lg:text-left">Sobre Nosotros</h1>
        <div className="flex flex-col gap-4 text-lg">
          <p className="max-w-[80ch] leading-7">
            En NutriMarket, nos apasiona brindar acceso a productos de alta calidad que promuevan un estilo de vida saludable. Nos enorgullece ofrecer una amplia selección de productos nutricionales y de bienestar, desde suplementos vitamínicos hasta alimentos orgánicos y vegan-friendly.
          </p>
          <p className="leading-7 max-w-[80ch]">
            Nuestra historia se remonta a 2024, cuando un grupo de entusiastas de la salud se unió con la visión de hacer que los productos de calidad sean accesibles para todos. Desde entonces, hemos crecido hasta convertirnos en un destino confiable para aquellos que buscan cuidar su salud y bienestar.
          </p>
          <p className="leading-7 max-w-[80ch]">
            Lo que nos distingue en NutriMarket es nuestro compromiso con la calidad. Nos asociamos con marcas de renombre y seleccionamos cuidadosamente cada producto para garantizar que cumpla con nuestros estándares rigurosos. Además, nos esforzamos por ofrecer un servicio excepcional al cliente, brindando asesoramiento experto y atención personalizada a cada uno de nuestros clientes.
          </p>
        </div>
      </section>
      <section> {/*no use formik por que no hay ningun mail o lugar en el backend a donde deba enviarse el mensaje, es solo para la demo*/}
        <h2 className="mb-4 text-[2.625rem] text-darkGreen1 text-center font-extrabold lg:text-left">Contacto</h2>
        <form className="grid grid-cols-2 gap-4 lg:max-w-[50%]">
          <input className="px-2 py-1 border-[1px] border-grayishGreen4 rounded outline-grayishGreen3 caret-grayishGreen3" type="text" placeholder="Nombre" />
          <input className="px-2 py-1 border-[1px] border-grayishGreen4 rounded outline-grayishGreen3 caret-grayishGreen3" type="Email" placeholder="Email"/>
          <textarea className="px-2 py-1 col-span-2 border-[1px] border-grayishGreen4 rounded outline-grayishGreen3 caret-grayishGreen3" name="message" id="message" cols="30" rows="10" placeholder="Mensaje"/>
          <button className="col-span-2 justify-self-center px-12 py-3 text-white font-bold bg-avocadoGreen rounded-full" type="button" onClick={() => {alert("Gracias por tu mensaje, sera respondido a la brevedad")}}>Enviar</button>
        </form>
      </section> 

    </main>
  )
}

export default AboutPage