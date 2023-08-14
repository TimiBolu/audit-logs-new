import {
    NextFunction,
    // Request,
    Response
} from "express";
import { v4 as uuidv4 } from "uuid";
import { AWSConfig, LogEntry, customRequest } from "../typings/config.type";
import { getUserIpAddress } from "../getUserIpAddress";
import { createS3Client } from "../config/s3.config";

// interface customRequest extends Request {
//     user?: any;
// }

// Middleware for logging user actions
export async function logUserActivity(
    // req: customRequest,
    req: customRequest,
    res: Response,
    next: NextFunction,
    config: AWSConfig, // Accept an AWS S3 client instance
    bucket: string,
): Promise<void> {
    const { method, url, params, query, body } = req;

    const ipAddress = await getUserIpAddress();

    // Store the log in JSON format
    const logEntry: LogEntry = {
        id: uuidv4(),
        timestamp: new Date().toISOString(),
        method,
        url,
        params,
        query,
        body,
        // user: user ? user : "",
        ipAddress,
        originUnit: query.originUnit as string,
    };

    let originalRes = res.json;

    res.json = (data: any) => {
        logEntry.response = data;
        logEntry.user = req.user;
        // Upload the log entry to the S3 bucket
        const s3Client = createS3Client(config);
        (async () => {
            try {

                // createS3Client.putObject(
                s3Client.putObject(
                    {
                        Bucket: bucket, // Replace with your S3 bucket name
                        Key: `${logEntry.id}.json`,
                        Body: JSON.stringify(logEntry),
                        ContentType: "application/json",
                    },
                    (error: any) => {
                        if (error) {
                            console.error("error uploading log:", error);
                        };
                    }
                ).promise();
            } catch (error) {
                console.log("error uploading log", error)
            };
        })();

        return originalRes.call(res, data);
    };

    next();
};
