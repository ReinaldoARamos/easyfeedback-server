import { Router } from "express";
import prisma from "../prisma";

export const userCreateRoute = Router();

userCreateRoute.post("/", async (req, res) => {
  try {
    const { email, name, createdAt, id,photo } = req.body;

  
    const feedbacks = await prisma.user.create({
      data: {
       email,
       name,
       createdAt,
      id,
      photo
      },
    });
    return res.status(200).json(feedbacks);
  } catch (error) {
    console.error("erro ao buscar feedbacks");
    return res.status(500).json({ error: "erro ao buscar feedback" });
  }
});
