import { Router } from "express";
import { feedbackRoutes } from "./feedbackRoute";
import { userFeedbackRoutes } from "./userFeedbackRoute"; 
import { feedbackPostRoute } from "./feedbackPostRoute";

export const routes = Router();

routes.use("/feedback", feedbackRoutes);
routes.use("/user-feedback", userFeedbackRoutes); 
routes.use("/feedbackpost", feedbackPostRoute); 