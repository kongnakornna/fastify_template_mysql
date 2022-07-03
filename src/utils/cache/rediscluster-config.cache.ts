import * as path from 'path'
import { createConnection } from 'typeorm';
const envPath = path.join(__dirname, '../config.conf')
require('dotenv').config({ path: envPath })
const DB_DC_RD_SERVER1: any = process.env.REDIS_HOST_SERVER1;
const DB_DC_RD_SERVER2: any = process.env.REDIS_HOST_SERVER2;
const DB_DC_RD_SERVER3: any = process.env.REDIS_HOST_SERVER3;
const REDIS_HOST_PORT1: any = process.env.REDIS_HOST_PORT1;
const REDIS_HOST_PORT2: any = process.env.REDIS_HOST_PORT2;
const REDIS_HOST_PORT3: any = process.env.REDIS_HOST_PORT3;  //7000 // 8000
const REDIS_HOST_PASSWORD: any = process.env.REDIS_HOST_PASSWORD;
// Config
let objConfig: any = {
  'host': [],
  'option': {
    'timeout': 3000,
    'redisOptions': {
      'password': null,
    }
  }
}
try {
  switch (process.env.NODE_ENV) {
    case 'canary':
    case 'staging':
    case 'production':
      objConfig = {
        'host': [{
          'host': DB_DC_RD_SERVER1,
          'port': parseInt(REDIS_HOST_PORT1)
        }, {
          'host': DB_DC_RD_SERVER2,
          'port': parseInt(REDIS_HOST_PORT2)
        }, {
          'host': DB_DC_RD_SERVER3,
          'port': parseInt(REDIS_HOST_PORT3)
        }],
        'option': {
          'timeout': 3000,
          'redisOptions': {
            'password':REDIS_HOST_PASSWORD,
          }
        }
      }
      break
    case 'development':
      objConfig = {
        'host': [{
          'host': DB_DC_RD_SERVER1,
          'port': parseInt(REDIS_HOST_PORT1)
        }, {
          'host': DB_DC_RD_SERVER2,
          'port': parseInt(REDIS_HOST_PORT2)
        }, {
          'host': DB_DC_RD_SERVER3,
          'port': parseInt(REDIS_HOST_PORT3)
        }],
        'option': {
          'timeout': 3000,
          'redisOptions': {
            'password':REDIS_HOST_PASSWORD,
          }
        }
      }
      break
    case 'local':
      objConfig = {
        'host': [{
          'host': DB_DC_RD_SERVER1,
          'port': parseInt(REDIS_HOST_PORT1)
        }, {
          'host': DB_DC_RD_SERVER2,
          'port': parseInt(REDIS_HOST_PORT2)
        }, {
          'host': DB_DC_RD_SERVER3,
          'port': parseInt(REDIS_HOST_PORT3)
        }],
        'option': {
          'timeout': 3000,
          'redisOptions': {
            'password':REDIS_HOST_PASSWORD,
          }
        }
      }
      break
  }
}
catch (err: any) {
  console.error('Cache Redis Cluster Config error  :',`${err.stack}`)
} finally {
    /************************/
      const ioRedis = require('ioredis');
      const RedisTimeout = require('ioredis-timeout');
      let client: any = null
      client = new ioRedis.Cluster(
          objConfig.host,
          objConfig.option
        )
        const Timeout = RedisTimeout(client, objConfig.option.timeout)
        console.log('Timeout',Timeout)
        client.on('ready', () => {
          //console.log('1st Cache Redis Cluster Connect is success',client)
          // console.log('1st Cache Redis Cluster Connect is success')
        })
        client.on('error', (err: any) => {
           // console.log(`1st Cache Redis Cluster Connect fail : ${err}`)
        })
    /************************/
   // console.log('1st Cache Redis Cluster Config finally :', objConfig);
}
export default objConfig