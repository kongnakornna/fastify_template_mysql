import { FastifyInstance } from 'fastify'
/*******************import************************/
    import schemaRouter from './controllers/schema'
    /*******************modules************************/
	/*******index************/
	import indexRouter from './modules/index/controllers/index'
	/*******mail************/
	import mailRouter from './modules/mail/controllers/mail'
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
	import testRouter from './modules/test/controllers/test' 
	/*******************Service************************/
    import customerRouter from './modules/customer/controllers/customer' 
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
	/*******user************/
    fastify.register(authRouter, { prefix: '/auth' })  
	fastify.register(userRouter, { prefix: '/user' })  
	fastify.register(loginRouter, { prefix: '/login' })  
	/*******file************/
	fastify.register(fileRouter, { prefix: '/file' })  
	fastify.register(uploadRouter, { prefix: '/uploads' })
    /*******************Demo************************/
    fastify.register(demoRouter, { prefix: '/demo' })  
	/*******************Test************************/
	fastify.register(testRouter, { prefix: '/test' })  
	/*******************Service************************/
    fastify.register(customerRouter, { prefix: '/customers' })  
  /*******************modules************************/
}