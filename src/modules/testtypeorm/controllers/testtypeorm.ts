
import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
/**************************************************/  
export default async function testtypeorm(fastify: FastifyInstance) {
    /**************************************************/  
    fastify.get('/search', /*ป้องกัน การใช้งาน โดย Token */{
    preValidation: [fastify.authenticate] // ป้องกัน การใช้งาน โดย Token
    },/*ป้องกัน การใช้งาน โดย Token */ async (request: FastifyRequest, reply: FastifyReply) => {
        /**************************************************/

        /**************************************************/  
    })
    /**************************************************/  
}

/*
MyProject
├── src              // place of your TypeScript code
│   ├── entity       // place where your entities (database models) are stored
│   │   └── User.ts  // sample entity
│   ├── migration    // place where your migrations are stored
│   └── index.ts     // start point of your application
├── .gitignore       // standard gitignore file
├── ormconfig.json   // ORM and database connection configuration
├── package.json     // node module dependencies
├── README.md        // simple readme file
└── tsconfig.json    // TypeScript compiler options

*/  