import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
@Entity()
export class SdUserRoles {
  
@PrimaryGeneratedColumn()
role_id!: number;

@Column("integer", { nullable: false})
user_id!: number;

@Column()
create!: string;
    
@Column()
update!: string;
}
