import { Request } from "express";
import { userInfo } from "./user";

interface myRequest extends Request {
  user?: userInfo;
  jwt?: string;
}

export default JwtRequest;
