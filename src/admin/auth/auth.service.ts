import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectDataSource, InjectRepository } from "@nestjs/typeorm";
import { Connection } from "mysql2";
import { AdminUserInfoEntity } from "../adminlogin/Entity/AdminUserInfoEntity";
import { Repository } from "typeorm";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectDataSource() private readonly connection: Connection,
    @InjectRepository(AdminUserInfoEntity)
    private readonly AdminUserInfoEntityRepository: Repository<AdminUserInfoEntity>,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    // Find user by email and password
    const user = await this.AdminUserInfoEntityRepository.findOne({
      where: { email: email, password: password },
    });

    if (user) {
      // Check if the user is active
      if (user.status === false) {
        // If the user is not active, return an error message
        throw new UnauthorizedException("User account is not active. You cannot login.");
      } else {
        // If the user is active, return user details
        return {
          id: user.id,
          store_id:user.store_id
        };
      }
    } else {
      // If user is not found, return null
      return null;
    }
  }

  async generateToken(user: any): Promise<string> {
    // Generate token only if the user is not null (i.e., found and active)
    if (user) {
      const payload = { email: user.email, sub: user.userId };
      return this.jwtService.signAsync(payload);
    }
    return null; // Return null if user is not found or not active
  }
}
