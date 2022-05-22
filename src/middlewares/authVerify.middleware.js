import jwt from "jsonwebtoken";
import errorService from "../services/exc/error.service";

const authVerifyMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    let err = errorService("Missing authorization headers");
    return res.status(401).json({ message: err.error });
  }

  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      let err = errorService("Invalid Token");
      return res.status(401).json({ message: err.error });
    }
    next();
  });
};

export default authVerifyMiddleware;
