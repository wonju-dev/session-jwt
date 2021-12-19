import express, { Response } from "express";
import { authenticate, createUser, findUser } from "../middleware";
import { JwtRequest } from "../types";

const sendResponse = (req: JwtRequest, res: Response) => {
  const { jwt } = req;
  if (!jwt) res.status(401).send("no user");
  else res.send(jwt);
};

const router = express.Router();
router.post("/signup", createUser, authenticate, sendResponse);
router.post("/signin", findUser, authenticate, sendResponse);

export default router;
