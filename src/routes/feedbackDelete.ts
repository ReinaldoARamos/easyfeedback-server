import { Router } from "express";
import prisma from "../prisma";


export const feedbackDelete = Router();

feedbackDelete.delete("/", async (req, res) => {
  const { feedbackId } = req.query;

  try {
    await prisma.feedback.delete({
      where: {
        id: Number(feedbackId),
      },
    });

    return res.status(200).json({ message: "Feedback deletado com sucesso" });
  } catch (error) {
    console.error("Erro ao deletar feedback:", error);
    return res.status(500).json({ error: "Erro ao deletar feedback" });
  }
});