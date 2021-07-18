import {Entity} from "typeorm";
@Entity()
export class Photo {
    id: any //number;
    name: any //string;
    description: any //string;
    filename: any //string;
    views: any //number;
    isPublished: any //boolean;
}