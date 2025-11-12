import { Router } from "express";
import prisma from "../prisma";


export const feedbackEditFeedbackRoute = Router();

feedbackEditFeedbackRoute.patch("/", async (req, res) => {
  const { id } = req.query;

  const feedback = await prisma.feedback.findUnique({
    where: { id: Number(id) },
  });

  if (!feedback) {
    return res.status(404).json({ error: "Feedback não encontrado" });
  }
  try {
    const { comment, title, userRating /*userId*/ } = req.body;

    const feedbacks = await prisma.feedback.update({
      where: { id: Number(id) },
      data: {
        comment,
        feedbackTitle: title,
        userRating,
        //userId,
      },
    });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
