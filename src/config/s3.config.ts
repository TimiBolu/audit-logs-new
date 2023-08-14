import { S3 } from "aws-sdk";
import { AWSConfig } from "../typings/config.type";

// Function to initialize AWS S3 client
export function createS3Client(config: AWSConfig): S3 {
    const s3ClientConfig = {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        region: config.region,
    };

    // Create and return the S3 client instance
    return new S3(s3ClientConfig);
}
