import { IsNotEmpty } from "class-validator";
export class haldiramStoreDTO {
    @IsNotEmpty()
    store_id: number;
    storename: string;
    address:string;
    gst_no:string;
    contact:number;
    
   
 
   
}
