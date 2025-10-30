import { Router } from "express";
import { prisma } from "../prisma";

export const feedbackPostRoute = Router();

feedbackPostRoute.post("/", async (req, res) => {
  try {
    const { comment, title, userRating, userId } = req.body;

  
    const feedbacks = await prisma.feedback.create({
      data: {
        comment,
        feedbackTitle: title,
        userRating,
        userId,
      },
    });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
