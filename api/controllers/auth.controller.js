import { UserModel } from "../models/usuario.models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { generarJWT } from "../helpers/generar_jwt.js";

export const signin = async (req, res) => {
  const { username, password } = req.body;
  console.log(username);

  try {
    const user = await UserModel.findOne({ where: { username } });

    if (!user) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - username",
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        msg: "Usuario / Password no son correctos - password",
      });
    }

    const token = await generarJWT({ user: user.id });

    return res.json({
      user,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const signup = async (req, res) => {
  try {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const newUser = new UserModel(req.body);
    const user = await newUser.save();
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};
