import { Connection } from "mysql2";
import { AdminUserLoginDTO } from "./dto/AdminUserLoginDTO";
export declare class AdminloginService {
    private readonly connection;
    constructor(connection: Connection);
    AdminUserLogin(adminUserLogindto: AdminUserLoginDTO): Promise<{
        user: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        accessToken: string;
        status: number;
    }>;
    AdminValidateUserLogin(): Promise<{
        user: import("mysql2/typings/mysql/lib/protocol/sequences/Query").Query;
        accessToken: string;
        status: number;
    }>;
}
