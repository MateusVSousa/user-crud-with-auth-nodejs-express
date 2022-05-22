import { Router } from "express";
import createUserController from "../controllers/createUser.controller";
import deleteUserControler from "../controllers/deleteUser.controller";
import retriveUserController from "../controllers/retriveUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";
import profileUserController from "../controllers/profileUser.controller";

import authVerifyMiddleware from "../middlewares/authVerify.middleware";
import uniqueEmailValidateMiddleware from "../middlewares/uniqueValidate.middleware";
import isAdminMiddleware from "../middlewares/isAdminVerify.middleware";

const route = Router();
route.post("", uniqueEmailValidateMiddleware, createUserController);
route.get("", isAdminMiddleware, retriveUserController);
route.put("/:id", authVerifyMiddleware, updateUserController);
route.delete("/:id", authVerifyMiddleware, deleteUserControler);
route.post("/login", userLoginController);
route.get("/profile", authVerifyMiddleware, profileUserController);

export default route;
