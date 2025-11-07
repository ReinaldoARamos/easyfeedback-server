import { Router } from "express";
import { prisma } from "../prisma";

export const feedbackDelete = Router();

feedbackDelete.delete("/", async (req, res) => {
  const { feedbackId } = req.query;

  try {
    const feedbacks = await prisma.feedback.delete({
      where: {
        id: Number(feedbackId),
      },
    });

    return res.status(200);
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
