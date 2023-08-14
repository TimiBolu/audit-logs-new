import { NextFunction, Response } from "express";
import { AWSConfig, customRequest } from "../typings/config.type";
export declare function logUserActivity(req: customRequest, res: Response, next: NextFunction, config: AWSConfig, // Accept an AWS S3 client instance
bucket: string): Promise<void>;
