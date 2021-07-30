import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
@Entity() 
export class Usertest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  image!: string;

  @Column()
  sort!: number;
 
}
