import { Router } from "express";
import { prisma } from "../prisma";

export const feedbackRoutes = Router();

feedbackRoutes.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const perpage = Number(req.query.perpage) || 10;
    const feedbacks = await prisma.feedback.findMany({
      skip: (page - 1) * perpage, //ele pega a pagina -1 e multiplica pelo perpage para ver o valor de itens eu suponho
      take: perpage,
      orderBy: { createdAt: "desc" },
      include: {
        user: { select: { photo: true, name: true } },
      },
    });
    const totalCount = await prisma.feedback.count();
    return res.status(200).json({
      data: feedbacks,
      totalCount,
    });
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
