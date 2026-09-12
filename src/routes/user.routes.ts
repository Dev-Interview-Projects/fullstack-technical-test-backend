import { Router } from "express";
import { getUsersController, getUserByIdController,
    createUserController,
    updateUserController,
    deleteUserController
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getUsersController);
router.get("/:id", getUserByIdController);
router.post("/", createUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
