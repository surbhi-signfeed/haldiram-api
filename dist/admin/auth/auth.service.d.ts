import { JwtService } from "@nestjs/jwt";
import { Connection } from "mysql2";
import { AdminUserInfoEntity } from "../adminlogin/Entity/AdminUserInfoEntity";
import { Repository } from "typeorm";
export declare class AuthService {
    private readonly jwtService;
    private readonly connection;
    private readonly AdminUserInfoEntityRepository;
    constructor(jwtService: JwtService, connection: Connection, AdminUserInfoEntityRepository: Repository<AdminUserInfoEntity>);
    validateUser(email: string, password: string): Promise<any>;
    generateToken(user: any): Promise<string>;
}
