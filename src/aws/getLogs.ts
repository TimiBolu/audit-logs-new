import { S3 } from "aws-sdk";
import { LogEntry } from "../typings/config.type";

// Function to fetch logs for a specific organization from the S3 bucket
export async function fetchLogsForOrganization(
    s3Client: S3,
    bucket: string,
    // organizationName?: string,
): Promise<LogEntry[]> {
    try {
        const response = await s3Client.listObjectsV2({
            Bucket: bucket, // Replace with your S3 bucket name
            // Prefix: `${organizationName}/`,
            // Prefix: `logs/${organizationId}/`,
        }).promise();

        // Fetch individual log objects from S3 and parse their content
        const logObjects = response.Contents || [];
        const logEntries: LogEntry[] = [];
        for (const object of logObjects) {
            const logData = await s3Client.getObject({
                Bucket: bucket, // Replace with your S3 bucket name
                Key: object.Key || "",
            }).promise();

            if (logData.Body) {
                const logEntry = JSON.parse(logData.Body.toString());
                logEntries.push(logEntry);
            }
        }

        console.log("logs:::", logEntries)
        return logEntries;
    } catch (error) {
        console.error("Error fetching logs:", error);
        return [];
    }
}
