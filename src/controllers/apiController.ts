import { Request, Response } from "express";
import {
  battleService,
  updateDatabaseWithDraw,
  updateDatabaseWithoutDraw,
} from "../services/apiServices.js";

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser } = res.locals.body;
  const response = await battleService(firstUser, secondUser);

  if (response.draw) {
    updateDatabaseWithDraw(firstUser, secondUser);
  } else {
    updateDatabaseWithoutDraw(response.winner, response.loser);
  }

  res.send(response);
}
