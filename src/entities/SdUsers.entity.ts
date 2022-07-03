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
export class SdUsers {
  
@PrimaryGeneratedColumn()
user_id!: number;

@Column()
first_name!: string;
  
@Column()
last_name!: string;

@Column()
fullname!: string;

@Column()
nickname!: string;

@Column()
username!: string;

@Column()
password!: string;

@Column()
email!: string;

@Column("integer", { nullable: false})
level!: number;

@Column("integer", { nullable: false})
status!: number;

@Column("integer", { nullable: false})
network_id!: number;

@Column()
avatar!: string;

@Column()
idcard!: string;

@Column()
remark!: string;

@Column()
infomation_agree_status!: number;

@Column("integer", { nullable: false})
gender!: number;

@Column()
birthday!: string;

@Column()
date!: string;

@Column()
last_sign_in!: string;

@Column()
online_status!: string;

@Column()
mesage!: string;
}
 