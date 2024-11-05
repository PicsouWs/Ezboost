import { Request, Response, NextFunction } from 'express';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.stack);

  if (err instanceof SyntaxError) {
    return res.status(400).json({
      message: 'Invalid JSON'
    });
  }

  res.status(500).json({
    message: 'Internal server error'
  });
};