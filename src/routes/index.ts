import { Router } from "express";
import { feedbackRoutes } from "./feedbackRoute";
import { userFeedbackRoutes } from "./userFeedbackRoute"; 

export const routes = Router();

routes.use("/feedback", feedbackRoutes);
routes.use("/user-feedback", userFeedbackRoutes); 