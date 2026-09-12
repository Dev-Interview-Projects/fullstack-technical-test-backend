import { Router } from "express";
import eventRoutes from "./event.routes.js";
import ticketTypeRoutes from "./ticket-type.routes.js";
import userRoutes from "./user.routes.js";

const router = Router();

router.use("/events", eventRoutes);
router.use("/ticket-types", ticketTypeRoutes);
router.use("/users", userRoutes);

export default router;
