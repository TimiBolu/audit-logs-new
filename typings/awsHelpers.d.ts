import { S3 } from "aws-sdk";
export declare function initS3Client(config: any): S3;
export declare function getLogsForOrganization(s3Client: S3, bucket: string): Promise<any[]>;
