import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({  })
    name: string;

    @Column({  unique: true })
    email: string;

    @Column({  })
    password: string;
    @Column({  })
    phone: number;
    @Column({  })
    address: string;
    @Column({  })
    store_id: number;
    @Column({ default:true })
    status: boolean;

    
}
