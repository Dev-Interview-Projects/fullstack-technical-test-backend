import { Router } from "express";
import { getReservationsController, getReservationByIdController, createReservationController, updateReservationController, deleteReservationController } from "../controllers/reservation.controller.js";

const router = Router();

router.get("/", getReservationsController);
router.post("/", createReservationController);
router.get("/:id", getReservationByIdController);
router.put("/:id", updateReservationController);
router.delete("/:id", deleteReservationController);

export default router;
