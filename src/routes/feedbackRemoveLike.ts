import { Router } from "express";
import { prisma } from "../prisma";

export const feedbackLikeRemoveCounterUpdate = Router();

feedbackLikeRemoveCounterUpdate.patch("/", async (req, res) => {
  try {
      const { id } = req.query;

    const feedback = await prisma.feedback.findUnique({
      where: { id: Number(id) },
    });

    if (!feedback) {
      return res.status(404).json({ error: "Feedback não encontrado" });
    }
  if(feedback.likesCount == 0) {
     return res.status(500).json({ error: "Likes abaixo de zero" });
    }

    const updatedFeedbackLike = await prisma.feedback.update({
      where: { id: Number(id) },
      data: {
        likesCount: feedback.likesCount - 1,
      },
    });
  
    return res.status(200).json(updatedFeedbackLike);
  } catch (error) {
    console.error("Erro ao atualizar likes:", error);
    return res.status(500).json({ error: "Erro ao atualizar likes" });
  }
});
