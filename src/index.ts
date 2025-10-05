import express from "express";
import { prisma } from "./prisma";

const app = express();
app.use(express.json());



app.listen(3333, () => console.log("Server running on http://localhost:3333"));
