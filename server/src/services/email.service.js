import { transporter } from "../config/email.config.js";
import { options } from "../config/options.config.js";

const sendEmail = async (email, token) => {
  try {
    const emailTemplate = `<div>
        <h1>Bienvenido!!, ${email}</h1>
        <p>Para confirmar cuenta ingrese en el siguiente link</p>
        <a href="${options.server.url}/api/confirm/${token}"
        target="_blank"
        >VERIFICAR CUENTA</a>

</div>`;

    const result = await transporter.sendMail({
      from: "Ecommerce",
      to: email,
      subject: "Registro exitoso",
      html: emailTemplate,
    });
    return result;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default {
  sendEmail,
};
