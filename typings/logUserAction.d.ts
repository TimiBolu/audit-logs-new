import { Request, Response, NextFunction } from "express";
export declare function logUserAction(req: Request, res: Response, next: NextFunction, config: any, bucket: string): Promise<void>;
