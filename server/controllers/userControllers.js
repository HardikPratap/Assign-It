import UserModel from "../models/User";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, isAdmin, role, title } = req.body;
    const userExists = await UserModel.findOne({ email });

    if (userExists) {
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
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: false, message: e.message });
  }
};
