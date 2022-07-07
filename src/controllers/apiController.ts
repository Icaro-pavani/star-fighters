import { Request, Response } from "express";
import { battleService } from "../services/apiServices.js";

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = res.locals.body;
  const test = await battleService(firstUser, secondUser);

  res.send(test);
}
