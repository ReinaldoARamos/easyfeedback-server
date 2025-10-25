import { Router } from "express";
import { prisma } from "../prisma";

export const userFeedbackRoutes = Router();

userFeedbackRoutes.get("/", async (req, res) => {
  try {
    const { userId } = req.query;
    const feedbacks = await prisma.feedback.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { photo: true, name: true , id: true} },
      },
      where: {
        user :  {
            id :  Number(userId),
        }
      },
    });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});


