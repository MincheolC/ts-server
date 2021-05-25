import { Response, Request, NextFunction } from 'express';

export function get(req: Request, res: Response, next: NextFunction): void {
  res.send('Welcome to TS Server');
}
