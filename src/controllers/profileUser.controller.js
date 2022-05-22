import jwt from "jsonwebtoken";
import profileUsersService from "../services/profileUser.service";

const profileUserController = (req, res) => {
  const token = req.headers.authorization;
  const userProcfile = profileUsersService(token);

  return res.status(200).json();
};
export default profileUserController;
