import { FastifyInstance } from 'fastify'
/*******************import************************/
    import schemaRouter from './controllers/schema'
    /*******************modules************************/
	/*******index************/
	import indexRouter from './modules/index/controllers/index'
	/*******mail************/
	import mailRouter from './modules/mail/controllers/mail'
    /*******oauth2************/
    import oauth2Router from './modules/oauth2/controllers/oauth2'
	/*******user************/
    import authRouter from './modules/auth/controllers/auth'
	import userRouter from './modules/user/controllers/user'
	import loginRouter from './modules/login/controllers/login'
	/*******file************/
	import fileRouter from './modules/file/controllers/file'
	import uploadRouter from './modules/upload/controllers/upload'
    /*******************Demo************************/
    import demoRouter from './modules/demo/controllers/demo'
	/*******************Test************************/
    import customerRouter from './modules/customer/controllers/customer' 

    /***********oauth2-server start***************/

    /***********oauth2-server end***************/
/*******************export************************/
export default async function router(fastify: FastifyInstance) {
   // router prefix
   /*******************controllers************************/
     fastify.register(schemaRouter, { prefix: '/schema' }) // http://localhost:8081/schema
    /*******************modules************************/
	/*******index************/
	fastify.register(indexRouter, { prefix: '/' }) // http://localhost:8081/
	/*******mail************/
	fastify.register(mailRouter, { prefix: '/mail' })
    /*******oauth2************/
    fastify.register(oauth2Router, { prefix: '/oauth2' })  
	/*******user************/
    fastify.register(authRouter, { prefix: '/auth' })  
	fastify.register(userRouter, { prefix: '/user' })  
	fastify.register(loginRouter, { prefix: '/login' })  
	/*******file************/
	fastify.register(fileRouter, { prefix: '/file' })  
	fastify.register(uploadRouter, { prefix: '/upload' })
    /*******************Demo************************/
    fastify.register(demoRouter, { prefix: '/demo' })  
	/*******************Test************************/
	/*******************Service************************/
    fastify.register(customerRouter, { prefix: '/customers' })  

  /*******************modules************************/
    /***********oauth2-server start***************/

    /***********oauth2-server end***************/


}