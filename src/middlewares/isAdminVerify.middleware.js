import jwt from "jsonwebtoken";
import errorService from "../services/exc/error.service";

const isAdminMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    let error = errorService("Missing Authorizarion  Token");
    return res.status(401).json(error);
  }
  jwt.verify(token, "SECRET_KEY", (error, decoded) => {
    if (error) {
      let err = errorService("Invalid Token");
      return res.status(401).json(err);
    }
    if (decoded.isAdmin === false) {
      let err = errorService("You are not Admin");
      return res.status(401).json(err);
    }
    next();
  });
};

export default isAdminMiddleware;
