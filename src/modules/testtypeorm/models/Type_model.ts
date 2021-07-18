import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: any; //number;
    @Column({
        length:100
    })
    name: any; //string;
    @Column("text")
    description: any; //string;
    @Column()
    filename: any; //string;
    @Column("double")
    views: any; //number;
    @Column()
    isPublished: any; //boolean;
}