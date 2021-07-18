import {Entity, Column, PrimaryColumn} from "typeorm";
@Entity()
export class Photo {
    @PrimaryColumn()
    id: any; //number;
    @Column()
    name:  any; //string;
    @Column()
    description:  any; //string;
    @Column()
    filename:  any; //string;
    @Column()
    views:  any; //number;
    @Column()
    isPublished: any; // boolean;
}