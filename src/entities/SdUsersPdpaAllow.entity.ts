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