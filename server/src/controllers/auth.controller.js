import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import {
  createAccessToken,
  checkAccessToken,
} from "../helpers/utils/jwt.utils.js";
import emailService from "../services/email.service.js";
import { v4 } from "uuid";

export const register = async (req, res) => {
  try {
    const { email, username, rol, password } = req.body;

    const userFound = await userModel.findOne({ email });
    if (userFound) return res.status(400).json(["The email is already in use"]);
    const code = v4();

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      rol,
      password: passwordHash,
      code: code,
    });

    const userSaved = await newUser.save();

    const token = await createAccessToken({
      id: userSaved._id,
      email: userSaved.email,
      rol: userSaved.rol,
      code: code,
    });

    const sendConfirm = await emailService.sendEmail(email, token);

    if (sendConfirm) {
      res.json({
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email,
        rol: userSaved.rol,
        status: userSaved.status,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
      });
    } else {
      throw new Error("Hubo un problema al enviar el correo");
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const confirm = async (req, res) => {
  try {
    const { token } = req.params;
    const checkToken = await checkAccessToken(token);

    if (!checkToken) {
      throw new Error("No se puede desencriptar el token");
    } else {
      const { email, code } = checkToken;
      const userFound = await userModel.findOne({ email });

      if (!userFound) {
        throw new Error("El usuario no existe");
      } else {
        if(userFound.status !== "UNVERIFIED"){
          throw new Error("La cuenta ya se encuentra verificada")
        }
        if (code !== userFound.code) {
          throw new Error("No existe el codigo");
        }

        const result = await userModel.updateOne(
          { _id: userFound._id },
          {
            $set: { status: "VERIFIED" },
          }
        );

        res.status(201).send({ status: "ok", payload: result });
      }
    }
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await userModel.findOne({ email });
    if (!userFound) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res.status(400).json({ message: "Incorrect credentials" });

    const token = await createAccessToken({
      id: userFound._id,
      email: userFound.email,
      rol: userFound.rol,
      code: userFound.code,
    });

    if (userFound.status !== "VERIFIED") {
      const result = await emailService.sendEmail(email, token);
      return res.json({ status: "pendient", message: "La cuenta se encuentra sin verificar, se envio un correo nuevamente" });
    }

    res.cookie("token", token, {
      httpOnly: true
    });

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      rol: userFound.rol,
      status: userFound.status,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
	res.cookie('token', '', {
		expires: new Date(0),
	});
	return res.sendStatus(200);
};

// esto es solo para verificar que se cargaron los datos, no va aqui
/* export const getUsers = async (req, res) => {
	const users = await usersModel.find();
	res.json(users);
};
 */
