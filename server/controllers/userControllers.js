import UserModel from "../models/User.js";
import { createJWT } from "../utils/index.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin, role, title } = req.body;
    const userExits = await UserModel.findOne({ email });

    if (userExits) {
      return res.status(400).json({
        status: false,
        message: "User already exists",
      });
    }

    const user = await UserModel.create({
      name,
      email,
      password,
      isAdmin,
      role,
      title,
    });

    if (user) {
      isAdmin ? createJWT(res, user._id) : null;
      user.password = undefined;
      res.status(201).json(user);
    } else {
      return res.status(400).json({
        status: false,
        message: "Invalid User Data",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: false, message: e.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: false,
        message: "User doesn't exists",
      });
    }
    if (!user?.isActive) {
      return res.status(401).json({
        status: false,
        message: "User account is not active",
      });
    }

    const isMatched = await user.matchPassword(password);

    if (user && isMatched) {
      createJWT(res, user._id);
      user.password = undefined;
      res.status(201).json(user);
    } else {
      return res.status(400).json({
        status: false,
        message: "Invalid User email or password",
      });
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: false, message: e.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("token", " ", {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({
      message: "Logout Successful",
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: false, message: e.message });
  }
};
