import deleteUserService from "../services/deleteUser.service";
import decodedService from "../services/decoded.service";
const deleteUserControler = (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const verifyIsAdmin = decodedService(token).isAdmin;
  const verifyId = decodedService(token).id;
  if (verifyIsAdmin === false && id !== verifyId) {
    return res.status(400).json({ message: "Missing admin permissions" });
  }
  const userDeleted = deleteUserService(id);
  if (userDeleted.error) {
    return res.status(400).json(userDeleted);
  }
  return res.status(200).json({ message: "User deleted with success" });
};
export default deleteUserControler;
