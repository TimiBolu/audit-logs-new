import { S3 } from "aws-sdk";
import { LogEntry } from "../typings/config.type";
export declare function fetchLogsForOrganization(s3Client: S3, bucket: string): Promise<LogEntry[]>;
