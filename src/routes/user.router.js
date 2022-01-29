import { Router } from "express";
import { getUserController } from './../app/controllers/user/get'
import { deleteUserController } from "./../app/controllers/user/delete";
import { createUserController } from "./../app/controllers/user/create/index.js";
import { updateUserController } from './../app/controllers/user/update'

const router = Router();

router.get("/user", getUserController.execute.bind(getUserController));
router.post("/user", createUserController.execute.bind(createUserController));
router.delete("/user", deleteUserController.execute.bind(deleteUserController));
router.patch("/user", updateUserController.execute.bind(updateUserController));

export default router;
