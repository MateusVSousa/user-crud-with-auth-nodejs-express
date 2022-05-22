import users from "../database";
import errorService from "./exc/error.service";

const updateUserService = (id, name, email) => {
  const updateUser = {
    id: id,
    name: name,
    email: email,
    updatedOn: Date(Date.now()),
  };

  const userIndex = users.findIndex((find) => find.id === id);

  if (userIndex === -1) {
    return errorService("User not Found");
  }
  users[userIndex] = { ...users[userIndex], ...updateUser };

  return users[userIndex];
};

export default updateUserService;
