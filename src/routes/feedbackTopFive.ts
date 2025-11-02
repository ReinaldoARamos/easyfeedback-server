import { Router } from "express";
import { prisma } from "../prisma";

export const feedbackTopFive = Router();

feedbackTopFive.get("/", async (req, res) => {
  try {
    const feedbacks = await prisma.feedback.findMany({
      take: 5,
      orderBy: { likesCount: "desc" },
      include: {
        user: { select: { photo: true, name: true } },
      },
    });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
