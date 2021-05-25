import { Response, Request, NextFunction } from 'express';

export function getCategories(req: Request, res: Response, next: NextFunction): void {
  res.send('Categories');
}
