import NoticeModel from "../models/Notification.js";
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

export const getTeamList = async (req, res) => {
  try {
    const users = await UserModel.find().select(
      "name title role email isActive"
    );

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ status: false, message: error.message });
  }
};

export const getNotificationsList = async (req, res) => {
  try {
    const { userId } = req.user;

    const notice = await NoticeModel.findOne({
      team: userId,
      isRead: { $nin: [userId] },
    }).populate("task", "title");

    res.status(201).json(notice);
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: false, message: e.message });
  }
};
export const updateUserProfile = async (req, res) => {
  try {
    const { userId, isAdmin } = req.user;
    const { _id } = req.body;

    const id =
      isAdmin && userId === _id
        ? userId
        : isAdmin && userId !== _id
        ? _id
        : userId;

    const user = await UserModel.findById(id);

    if (user) {
      user.name = req.body.name || user.name;
      user.title = req.body.title || user.title;
      user.role = req.body.role || user.role;
      const updateUser = await UserModel.save();

      user.password = undefined;

      res.status(201).json({
        status: true,
        message: "Profile Updated Successfully.",
        user: updatedUser,
      });
    } else {
      res.status(404).json({ status: false, message: "User not found" });
    }
  } catch (e) {
    console.log(e);
    return res.status(400).json({ status: false, message: e.message });
  }
};
