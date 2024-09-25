import { IsNotEmpty } from "class-validator";
export class haldiramProductDTO {
    @IsNotEmpty()
    id: number;
    user_id:number
    brand:string;
    product_name:string;
    batch:string;;
    address:string;
    grossWT:string;
    netWT:string;
    packing_date:Date;
    used_by:Date
    
   
 
   
}
