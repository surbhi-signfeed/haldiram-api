import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity('user')
export class AdminUserInfoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({name: 'status',type: 'boolean' })
  status: boolean;
  @Column({name: 'email',type: 'varchar' })
  email: string;
  @Column({name: 'password',type: 'varchar' })
  password: string;
  @Column({name: 'store_id',type: 'int' })
  store_id: number;
  

}