import userLoginService from "../services/userLogin.service";

const userLoginController = (req, res) => {
  const { email, password } = req.body;
  const userLogin = userLoginService(email, password);
  if (userLogin.error) {
    return res.status(400).json(userLogin);
  }
  return res
    .status(200)
    .json({ Sucess: "You are loged now ", token: userLogin });
};
export default userLoginController;
