import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
 // @Entity({ database: "default" })
 @Entity()
export class Ad_administrator {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    fullname!: string

    @Column()
    username!: string

    @Column()
    password!: string

    @Column()
    passwordvd!: string

    @Column()
    email!: string

    @Column()
    role_id!: number

    @Column()
    status!: number

    @Column()
    idcard!: string

    @Column()
    remark!: string

    @Column()
    infomation_agree_status!: string

    @Column()
    gender!: string

    @Column()
    birthday!: string

    @Column()
    date!: string

    @Column()
    last_sign_in!: string

    @Column()
    mesage!: string

    @Column()
    network_id!: number

    @Column()
    avatar!: string

    @Column()
    online_status!: number

}
