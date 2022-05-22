import users from "../database";
import { v4 as uuid } from "uuid";
import * as bcrypt from "bcrypt";

const createUserService = async (email, name, password, isAdmin) => {
  const hashPwd = await bcrypt.hash(password, 2);
  const dateNow = Date.now();

  const newUser = {
    name: name,
    email: email,
    id: uuid(),
    password: hashPwd,
    isAdmin: isAdmin,
    createdOn: Date(dateNow),
    updatedOn: Date(dateNow),
  };
  if (!newUser.isAdmin) {
    newUser.isAdmin = false;
  }
  users.push(newUser);

  return newUser;
};

export default createUserService;
