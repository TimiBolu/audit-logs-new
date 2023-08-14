import { S3 } from "aws-sdk";
import { AWSConfig } from "../typings/config.type";
export declare function createS3Client(config: AWSConfig): S3;
