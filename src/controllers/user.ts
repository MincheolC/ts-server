import { Response, Request, NextFunction } from 'express';

export function getUsers(req: Request, res: Response, next: NextFunction): void {
  res.send('Users');
}
