import { Logger } from "@nestjs/common";
import { AdminloginService } from "./adminlogin.service";
export declare class AdminloginController {
    private readonly adminloginservice;
    private readonly logger;
    constructor(adminloginservice: AdminloginService, logger: Logger);
}
