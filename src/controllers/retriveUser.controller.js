import retriveUserService from "../services/retriveUser.service";

const retriveUserController = (req, res) => {
  const userList = retriveUserService();
  return res.json(userList);
};

export default retriveUserController;
