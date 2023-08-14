"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createS3Client = void 0;
var aws_sdk_1 = require("aws-sdk");
// Function to initialize AWS S3 client
function createS3Client(config) {
    var s3ClientConfig = {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        region: config.region,
    };
    // Create and return the S3 client instance
    return new aws_sdk_1.S3(s3ClientConfig);
}
exports.createS3Client = createS3Client;
