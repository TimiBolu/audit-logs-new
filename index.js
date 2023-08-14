"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./getUserIpAddress"), exports);
__exportStar(require("./aws/getLogs"), exports);
__exportStar(require("./aws/logToS3"), exports);
__exportStar(require("./config/s3.config"), exports);
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
