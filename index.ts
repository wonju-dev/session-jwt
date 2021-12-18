import express from "express";
import dotenv from "dotenv";
import path from "path";
import { mainPageRouter, authRouter } from "./routes";

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/", mainPageRouter);
app.use("/login", authRouter);

app.listen(process.env.PORT, () => {
  console.log("server created");
});
