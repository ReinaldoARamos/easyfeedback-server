import { Router } from "express";
import { prisma } from "../prisma";


export const feedbackRoutes = Router();

// rota GET /feedbacks
feedbackRoutes.get("/", async (req, res) => {
  try {
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" }, // opcional: ordena do mais novo pro mais antigo
    });

    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("Erro ao buscar feedbacks:", error);
    return res.status(500).json({ error: "Erro interno ao buscar feedbacks" });
  }
});
