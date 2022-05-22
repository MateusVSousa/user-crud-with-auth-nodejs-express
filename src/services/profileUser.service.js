import users from "../database";
import jwt from "jsonwebtoken";

const profileUsersService = (token) => {
  const decode = jwt.verify(token, "SECRET_KEY");
  const id = decode.id;
  const userProfile = users.filter((user) => user.id === id);
  return userProfile;
};
export default profileUsersService;
