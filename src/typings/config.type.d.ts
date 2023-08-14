/// <reference types="node" />

import { Request } from "express";

// Define custom interfaces and types here as needed
export declare type LogEntry = {
    id: string;
    timestamp: string;
    method: string;
    url: string;
    params: any;
    query: any;
    body: any;
    user?: any;
    ipAddress: any;
    originUnit: string;
    response?: any;
};

// AWS configuration object
export declare type AWSConfig = {
    accessKeyId: string;
    secretAccessKey: string;
    region: string;
    bucket: string;
};

export declare interface customRequest extends Request {
    user?: any;
}