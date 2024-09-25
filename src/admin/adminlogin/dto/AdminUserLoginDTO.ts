import {IsNotEmpty} from "class-validator";

export class AdminUserLoginDTO {
  @IsNotEmpty()
  email: string
  @IsNotEmpty()
  password: string

}