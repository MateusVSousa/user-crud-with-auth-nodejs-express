import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";
import errorService from "./exc/error.service";

const userLoginService = (email, password) => {
  const user = users.find((item) => item.email === email);

  if (!user) {
    return errorService("Email or Password invalid !");
  }
  const matchPwd = bcrypt.compareSync(password, user.password);
  if (!matchPwd) {
    return errorService("Email or Password Invalid !");
  }

  const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, "SECRET_KEY", {
    expiresIn: "24h",
  });

  return token;
};

export default userLoginService;
