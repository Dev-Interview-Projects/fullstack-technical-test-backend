import { Router } from "express";
import eventRoutes from "./event.routes.js";
import ticketTypeRoutes from "./ticket-type.routes.js";
import userRoutes from "./user.routes.js";
import reservationRoutes from "./reservation.routes.js";
import authRoutes from "./auth.routes.js";

const router = Router();

router.use("/events", eventRoutes);
router.use("/ticket-types", ticketTypeRoutes);
router.use("/users", userRoutes);
router.use("/reservations", reservationRoutes);
router.use("/auth", authRoutes);

export default router;
