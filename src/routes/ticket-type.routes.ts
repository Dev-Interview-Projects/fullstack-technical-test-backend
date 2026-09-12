import { Router } from "express";
import { getTicketTypesController, getTicketTypeByIdController, createTicketTypeController, updateTicketTypeController, deleteTicketTypeController } from "../controllers/ticket-type.controller.js";

const router = Router();

router.get("/", getTicketTypesController);
router.post("/", createTicketTypeController);
router.get("/:id", getTicketTypeByIdController);
router.put("/:id", updateTicketTypeController);
router.delete("/:id", deleteTicketTypeController);

export default router;
