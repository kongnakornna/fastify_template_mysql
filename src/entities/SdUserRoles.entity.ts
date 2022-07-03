import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  JoinColumn,
  OneToMany,
  ManyToOne
} from 'typeorm'
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
