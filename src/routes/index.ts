import { Router } from "express";
import { feedbackRoutes } from "./feedbackRoute";

//import { userRoutes } from "./user/route";

export const routes = Router();

// Monta cada sub-rota com prefixos diferentes
//routes.use("/users", userRoutes);
routes.use("/feedback", feedbackRoutes);