import express from "express";
import { PrismaClient } from "@prisma/client";

const PORT = Number(process.env.PORT || 8888);
const app = express();
const clnt = new PrismaClient();

app.get("/", (req, res) => {
  return res.status(200).send("Welcome to Learnhub").end();
});

app.listen(PORT, () => {
  console.log(`LearnHub API is up at ${PORT}`);
});
