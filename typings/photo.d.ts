import * as typeorm from 'typeorm'
import internal from 'stream';
declare module 'fastify' {
   interface Photo {
        id: number
        name: string
        description: string
        filename: string
        views: number
        isPublished: boolean
    } 
}