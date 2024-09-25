import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('product')
export class haldiramProductEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'user_id', type: 'int' })
    user_id: number;
    @Column({ name: 'brand', type: 'varchar' })
    brand: string;
    @Column({ name: 'product_name', type: 'varchar' })
    product_name: string;
    @Column({ name: 'batch', type: 'varchar' })
    batch: string;
    @Column({ name: 'address', type: 'varchar' })
    address: string;
    @Column({ name: 'grossWT', type: 'varchar' })
    grossWT: string;
    @Column({ name: 'netWT', type: 'varchar' })
    netWT: string;
    @Column({ name: 'packing_date', type: 'date' })
    packing_date: Date;
    @Column({ name: 'used_by', type: 'date' })
    used_by: Date;
   
}
