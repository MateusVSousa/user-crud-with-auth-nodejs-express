import decodedService from "../services/decoded.service";
import updateUserService from "../services/updateUser.service";

const updateUserController = (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { email, name } = req.body;
  const verifyIsAdmin = decodedService(token).isAdmin;
  const verifyId = decodedService(token).id;
  if (verifyIsAdmin === false && id !== verifyId) {
    return res.status(400).json({ message: "Missing admin permissions" });
  }
  const userUpdated = updateUserService(id, email, name);
  if (userUpdated.error) {
    res.status(404).json(userUpdated);
  }
  return res.status(200).json(userUpdated);
};

export default updateUserController;
