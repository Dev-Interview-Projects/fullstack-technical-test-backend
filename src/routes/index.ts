import { Router } from "express";
import eventRoutes from "./event.routes.js";
import ticketTypeRoutes from "./ticket-type.routes.js";

const router = Router();

router.use("/events", eventRoutes);
router.use("/ticket-types", ticketTypeRoutes);

export default router;
