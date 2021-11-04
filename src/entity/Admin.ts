import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
 // @Entity({ database: "default" })
 @Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  firstName!: string

  @Column()
  lastName!: string

  @Column()
  username!: string

 @Column()
  password!: string

 @Column()
  age!: number

@Column()
  status!: number
}
