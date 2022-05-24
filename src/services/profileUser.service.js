import users from "../database";
import jwt from "jsonwebtoken";
import errorService from "./exc/error.service";

const profileUsersService = (id) => {
  const userProfile = users.findIndex((user) => user.id === id);
  console.log(userProfile);
  if (userProfile === -1) {
    return errorService("User not Found");
  }
  return users[userProfile];
};
export default profileUsersService;
