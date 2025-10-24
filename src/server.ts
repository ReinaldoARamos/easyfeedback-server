import express from "express";
import cors from "cors";
import { routes } from "./routes"; // importa o index.ts da pasta routes automaticamente

const app = express();

app.use(cors({
  origin: "http://localhost:3001"
}));

app.use(express.json({ limit: "10mb" }));

// todas as rotas centralizadas aqui
app.use(routes);

app.listen(3333, () => {
  console.log("🚀 HTTP SERVER RUNNING on http://localhost:3333");
});
