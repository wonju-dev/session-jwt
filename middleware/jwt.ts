import Jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";
import { JwtRequest } from "../types";

const authenticate = (req: JwtRequest, res: Response, next: NextFunction) => {
  if (req.user) {
    const { username, password } = req.user;
    const jwt = createJWT(username, password);
    req.jwt = jwt;
  }
  next();
};

const createJWT = (username: string, password: string) => Jwt.sign({ username, password }, process.env.JWT_SECRET_KEY);

export { authenticate };
