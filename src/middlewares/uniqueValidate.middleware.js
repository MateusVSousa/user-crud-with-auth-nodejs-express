import users from "../database";
import errorService from "../services/exc/error.service";

const uniqueEmailValidateMiddleware = (req, res, next) => {
  const { email } = req.body;

  const uniqueEmail = users.find((user) => email === user.email);

  if (uniqueEmail) {
    const error = errorService("Email is already in use");
    return res.status(400).json(error);
  }
  next();
};

export default uniqueEmailValidateMiddleware;
