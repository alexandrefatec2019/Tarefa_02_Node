import { UserModel } from "./../../../models/user.model.js";
import { UserService } from "./../../../services/user.service.js";
import { GetUserController } from "./get-user";

const userService = new UserService(UserModel);
const getUserController = new GetUserController(userService);

export { getUserController };
