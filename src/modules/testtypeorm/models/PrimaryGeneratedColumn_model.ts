import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Photo {
    @PrimaryGeneratedColumn()
    id: any; //number;
    @Column()
    name: any; //string;
    @Column()
    description: any; //string;
    @Column()
    filename: any; //string;
    @Column()
    views: any; //number;
    @Column()
    isPublished: any; // boolean;
}