import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('store')
export class haldiramStoreEntity {
    @PrimaryGeneratedColumn()
    store_id: number;

    @Column({ name: 'storename', type: 'varchar' })
    storename: string;
    @Column({ name: 'address', type: 'varchar' })
    address: string;
    @Column({ name: 'contact', type: 'int' })
    contact: number;
    @Column({ name: 'gst_no', type: 'varchar' })
    gst_no: string;
   
}
