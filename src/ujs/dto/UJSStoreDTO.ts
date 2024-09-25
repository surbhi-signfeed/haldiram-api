import { IsNotEmpty } from "class-validator";
export class StoreDTO {
    @IsNotEmpty()
    store_id: number;
    storename: string;
    address:string;
    gst_no:string;
    contact:number;
    
   
 
   
}
