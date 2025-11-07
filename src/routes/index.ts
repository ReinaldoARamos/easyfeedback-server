import { Router } from "express";
import { feedbackRoutes } from "./feedbackRoute";
import { userFeedbackRoutes } from "./userFeedbackRoute";
import { feedbackPostRoute } from "./feedbackPostRoute";
import { feedbackLikeCounterUpdate } from "./feedbacklike";
import { feedbackLikeRemoveCounterUpdate } from "./feedbackRemoveLike";
import { feedbackTopFive } from "./feedbackTopFive";
import { feedbackDelete } from "./feedbackDelete";
import { feedbackEditFeedbackRoute } from "./feedbackEditFeedback";

export const routes = Router();

routes.use("/feedback", feedbackRoutes);
routes.use("/user-feedback", userFeedbackRoutes);
routes.use("/feedbackpost", feedbackPostRoute);
routes.use("/feedbackLikeCounter", feedbackLikeCounterUpdate);
routes.use("/feedbackRemoveLikeCounter", feedbackLikeRemoveCounterUpdate);
routes.use("/feedbackTopFive", feedbackTopFive);
routes.use("/feedbackDelete", feedbackDelete);
routes.use("/feedbackEditFeedback", feedbackEditFeedbackRoute);
