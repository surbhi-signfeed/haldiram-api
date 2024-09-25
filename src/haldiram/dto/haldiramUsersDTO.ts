import { IsNotEmpty,IsOptional } from "class-validator";
export class haldiramUsersDTO {
 
    id: number;
    @IsNotEmpty()
    name: string;
    email: string;
    password: string;
    phone:number;
    store_id:number;
    address:string;
    status:boolean

    
}
