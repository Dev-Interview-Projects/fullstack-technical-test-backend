import { Router } from "express";
import { getEventsController, createEventController, getEventByIdController, updateEventController, deleteEventController } from "../controllers/event.controller.js";

const router = Router();

router.get("/", getEventsController);
router.post("/", createEventController);
router.get("/:id", getEventByIdController);
router.put("/:id", updateEventController);
router.delete("/:id", deleteEventController);

export default router;
