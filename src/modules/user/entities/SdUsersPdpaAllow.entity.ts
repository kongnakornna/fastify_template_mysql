import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
@Entity()
export class SdUsersPdpaAllow {
  
@PrimaryGeneratedColumn()
allow_id!: number;

@Column("integer", { nullable: false})
pdpa_option_id!: number;

@Column("integer", { nullable: false})
user_id!: number;
    
@Column("integer", { nullable: false})
status!: number;
}
 