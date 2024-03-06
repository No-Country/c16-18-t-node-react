import bcrypt from "bcryptjs";
import userModel from "../models/user.model.js";
import {
  createAccessToken,
  checkAccessToken,
} from "../helpers/utils/jwt.utils.js";
import emailService from "../services/email.service.js";
import { v4 } from "uuid";
import businessService from "../services/business.service.js";
import { options } from "../config/options.config.js";

export const register = async (req, res) => {
  try {
    const {
      email,
      name,
      lastname,
      rol,
      password,
      confirmPassword,
      avatar,
      businessName,
    } = req.body;
    const code = v4();

    const userFound = await userModel.findOne({ email });
    if (userFound)
      return res
        .status(400)
        .send({ status: "error", payload: "The email is already in use" });

    if (password !== confirmPassword) {
      return res
        .status(400)
        .send({ status: "error", payload: "Passwords do not macth!" });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      name,
      lastname,
      email,
      rol,
      avatar,
      password: passwordHash,
      code: code,
    });

    const userSaved = await newUser.save();

    if (userSaved.rol === "Vendedor") {
      const result = await businessService.createBusiness(
        userSaved._id,
        businessName
      );
      if (!result) {
        throw new Error(result.err);
      }
    }

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
        name: userSaved.name,
        lastname: userSaved.lastname,
        email: userSaved.email,
        rol: userSaved.rol,
        status: userSaved.status,
        avatar: userSaved.avatar,
        createdAt: userSaved.createdAt,
        updatedAt: userSaved.updatedAt,
      });
    } else {
      throw new Error("Hubo un problema al enviar el correo");
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", payload: "Hubo un problema en el servidor" });
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
        if (userFound.status !== "UNVERIFIED") {
          return res.redirect(`${options.server.url_frontend}/home`);
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

        if (result) {
          return res.redirect(`${options.server.url_frontend}/confirm-user`);
        } else {
          throw new Error("Hubo un problema para verificar la cuenta");
        }
      }
    }
  } catch (error) {
    return res.status(500).json({ status: "error", payload: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await userModel.findOne({ email });
    if (!userFound)
      return res
        .status(400)
        .send({ status: "error", payload: "User not found" });

    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch)
      return res
        .status(400)
        .send({ status: "error", payload: "Incorrect credentials" });

    const token = await createAccessToken({
      id: userFound._id,
      email: userFound.email,
      rol: userFound.rol,
      code: userFound.code,
    });

    if (userFound.status !== "VERIFIED") {
      throw new Error("La cuenta se encuentra sin verificar");
    }

    res.cookie("token", token);

    res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email,
      rol: userFound.rol,
      avatar: userFound.avatar,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    return res.status(500).send({ status: "error", payload: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};
