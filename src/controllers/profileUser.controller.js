import decodedService from "../services/decoded.service";
import profileUsersService from "../services/profileUser.service";

const profileUserController = (req, res) => {
  const token = req.headers.authorization;
  const verifyId = decodedService(token).id;
  const userProcfile = profileUsersService(verifyId);
  if (userProcfile.error) {
    return res.status(400).json(userProcfile);
  }
  return res.status(200).json(userProcfile);
};
export default profileUserController;
