import { Response, NextFunction } from "express";
import { JwtRequest, userInfo } from "../types";

const DB: Array<userInfo> = [
  {
    username: "a",
    password: "1"
  },
  {
    username: "b",
    password: "2"
  }
];

const findUser = (req: JwtRequest, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = DB.find(data => {
    if (data.username === username) {
      if (data.password === password) return data;
    }
  });
  req.user = user;
  next();
};

const createUser = (req: JwtRequest, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  DB.push({ username, password });
  req.user = { username, password };
  next();
};

export { createUser, findUser };
