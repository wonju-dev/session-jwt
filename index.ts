import express from "express";
import dotenv from "dotenv";
import { mainPageRouter } from "./routes";

dotenv.config();

const app = express();

app.listen(process.env.PORT, () => {
  console.log("server created");
});

app.use("/", mainPageRouter);
