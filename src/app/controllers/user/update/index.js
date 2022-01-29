import { UserModel } from "./../../../models/user.model.js";
import { UserService } from "./../../../services/user.service.js";
import { UpdateUserController } from "./update-user.controller.js";

const userService = new UserService(UserModel);
const updateUserController = new UpdateUserController(userService);

export { updateUserController };
