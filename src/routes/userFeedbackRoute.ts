import { Router } from "express";
import prisma from "../prisma";

export const userFeedbackRoutes = Router();

userFeedbackRoutes.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const perpage = Number(req.query.perpage) || 6;
    const { userId } = req.query;
    const feedbacks = await prisma.feedback.findMany({
      skip: (page - 1) * perpage,
      take: perpage,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { photo: true, name: true, id: true } },
      },
      where: {
        user: {
          id: Number(userId),
        },
      },
    });
    const totalCount = await prisma.feedback.count();
    return res.json({
      feedbacks,
      totalCount,
    });
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
