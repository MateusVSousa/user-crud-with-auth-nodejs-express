import users from "../database";
import errorService from "./exc/error.service";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((item) => item.id === id);
  if (userIndex === -1) {
    return errorService("User not found");
  }
  users.splice(userIndex, 1);
  return "User has been deleted";
};

export default deleteUserService;
