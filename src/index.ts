
export * from "./getUserIpAddress";
export * from "./aws/getLogs";
export * from "./aws/logToS3";
export * from "./config/s3.config";
export * from "./typings/config.type";

// import { getUserIpAddress } from "./getUserIpAddress";  
// import { logUserAction } from "./aws/logToS3";
// import { Response, NextFunction } from "express";
// import { customRequest } from "./typings/config.type";
// import { getLogsForOrganization } from "./aws/getLogs";

// export function logger() {
//     return {
//         getUserIp: async () => await getUserIpAddress(),
//         logUserActivity: async(req: customRequest, res: Response, next: NextFunction) => logUserAction(req, res, next, config, bucket),
//         getLogs:async()=> await getLogsForOrganization()
//     }
// }