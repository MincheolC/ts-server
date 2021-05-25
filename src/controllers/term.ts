import { Response, Request, NextFunction } from 'express';

export function getTerms(req: Request, res: Response, next: NextFunction): void {
  res.send('Terms');
}
