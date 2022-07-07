import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const serviceErrorToStatusCode = {
  conflict: 409,
  unprocessable: 422,
};

export function conflictError() {
  return { type: "conflict" };
}

export function unprocessableError() {
  return { type: "unprocessable" };
}

export default function handleErrorsMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.type) {
    return res.sendStatus(serviceErrorToStatusCode[err.type]);
  }

  return res.sendStatus(500);
}
