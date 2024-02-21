import { NextFunction, Request, Response } from 'express';

export function LoggerFunctionMiddleware(
  req: Request,
  _: Response,
  next: NextFunction,
) {
  console.log(`Request from Funcion! ${req.ip}...`);
  next();
}
