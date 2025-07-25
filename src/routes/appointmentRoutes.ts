import express from "express";
import { AppointmentController } from "../controllers/AppointmentController";

const appointmentRoutes = express.Router();

appointmentRoutes.get("/", AppointmentController.list);

appointmentRoutes.get("/:id", AppointmentController.getById);

appointmentRoutes.get("/user/:id", AppointmentController.getMyAppointments);

appointmentRoutes.post("/", AppointmentController.create);

appointmentRoutes.put("/:id/cancel", AppointmentController.update);

export default appointmentRoutes;
