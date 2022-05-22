import createUserService from "../services/createUser.service";

const createUserController = async (req, res) => {
  const { email, name, password, isAdmin } = req.body;
  const user = await createUserService(email, name, password, isAdmin);
  return res.status(201).json({
    id: user.id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    createdOn: user.createdOn,
    updatedOn: user.updatedOn,
  });
};
export default createUserController;
