const { promisify } = require('util');
const ioRedis = require('ioredis');
const RedisTimeout = require('ioredis-timeout');
const moment = require('moment');
import objConfig from './rediscluster-config.cache'
let client: any = null
const ConnectionCache = () => { // Connection Redis Cluster DB  ส่วนนี้ใช้ในการ เชื่อมต่อ host
  client = new ioRedis.Cluster(
        objConfig.host,
        objConfig.option
    )
    RedisTimeout(client, objConfig.option.timeout)
        client.on('ready', () => { 
            console.log('2rd Cache Redis Cluster Connect is success')
        })
        client.on('error', (err: any) => {
            console.log(`2rd init Cache Redis Cluster init fail : ${err}`)
        })
} 
const retRet = {
        'result': true,
        'remark': 'success',
        'runlotime': null,
        'data': []
}
// ส่วนนี้ใช้ในการ จดการ Cache Redis  แบบ class 
export class CacheData { 
        async SetCacheData(setData: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis  เชื่อมต่อ host
            }
            // รับขอมูลมาแบบ array time=ระยะเวลา keycache=ชื่อ คีย์  data= ข้อมูลทีนำมา cache
            const time = setData.time;
            const keycache = setData.keycache;
            const data = setData.data;
            // console.log('setcache setData', setData);
            await client.setex(keycache, time, JSON.stringify(data));  // set data cache  // ส่วนนี้ใช้ในการ บันทึกข้อมูลลง บน cache
            // console.log('keycache', keycache);
            return keycache
        }
        async GetCacheData(keycache: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis
            }
            const result = await promisify(client.get).bind(client)(keycache); // get data cache ส่วนนี้ใช้ในการ ดึงข้อมูลจาก cache มาแสดง
            const resultcache = JSON.parse(result);
            // console.log('keycache', keycache);
            // console.log('getcache resultcache', resultcache);
            return resultcache
        }
        async DeleteCacheData(keycache: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis
            }
            await promisify(client.del).bind(client)(keycache); // del data cache  ส่วนนี้ใช้ในการ ลบมูล ออกจาก cache 
            // console.log('del keycache', keycache);
            return keycache
        } 
        async resetCacheById(keycache: any) {
            if (client === null) {
                await ConnectionCache()  // Connection Redis
                /*
                    client.on("error", function (err) {
                        console.log("Error " + err);
                        });
                */
            } 
            // client.getset(key, 0, (err, reply) => {
            await promisify(client.getset).bind(client)(keycache,0); // del data cache  ส่วนนี้ใช้ในการ ลบมูล ออกจาก cache 
            // console.log('keycache', keycache);
            return keycache
        } 
        async UpdateCacheData(setData: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis  เชื่อมต่อ host
            }
            // รับขอมูลมาแบบ array time=ระยะเวลา keycache=ชื่อ คีย์  data= ข้อมูลทีนำมา cache
            let id = setData.id;
            const time = setData.time;
            const keycache = setData.keycache;
            const value_data = setData.data;
            console.log('setcache setData', setData);
            if (id == '') {
                await client.getset(keycache, JSON.stringify(value_data));  // update Cache // ส่วนนี้ใช้ในการ บันทึกข้อมูลลง บน cache
            } else {
                await client.hset(id, keycache, time, JSON.stringify(value_data));  // update Cache // ส่วนนี้ใช้ในการ แก้ไขข้อมูลลง บน cache   
            }
            console.log('id cache', id);
            console.log('keycache', keycache);
            console.log('value_data', value_data);
            console.log('time', time);
            return keycache
        }
        async gethCacheById(setData: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis  เชื่อมต่อ host
            }
            // รับขอมูลมาแบบ array time=ระยะเวลา keycache=ชื่อ คีย์  data= ข้อมูลทีนำมา cache
            let id = setData.id;
            const time = setData.time;
            const keycache = setData.keycache;
            const value_data = setData.data;
            console.log('setcache setData', setData);
            // gethCacheById
            const result = await promisify(client.hmget).bind(client)(id,keycache); // gethCacheById
            console.log('id cache', id);
            console.log('keycache', keycache);
            return keycache
        }
        async Test(setData: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis
            }
            const time = setData.time;
            const keycache = 'Test_Cache'; 
            // console.log('keycache', keycache);
            return keycache
        }
        async OTP(keycache: any) {
            if (client === null) {
                 await ConnectionCache()  // Connection Redis
            }
            let date: any =  Date.now()
            var nowseconds = new Date().getTime()
            var timestamp: any = nowseconds
            var datenew = new Date(timestamp);
            const dayth = toThaiDate(datenew);
            const dayen = toEnDate(datenew);
            const time = 30;    
            const data = getRandomint(6);
            const keyotp = getRandomString(7);
            const key: any = 'OTP_Auth_'+data;
            // console.log('Random int', data);
            // console.log('key otp',keyotp);
            await client.setex(key,time,JSON.stringify(data));  // set data cache 
            console.log('keycache ', key); 
            const getOTP = await promisify(client.get).bind(client)(key); // get data cache
            console.log('getOTP ', getOTP); 
            const resultlocacheloOTP = JSON.parse(getOTP);
            var startDate = new Date(timestamp);
            var endDate = new Date(timestamp);
            if (startDate < endDate){
            // Do something
            }
            const OTP = {
                            key: key,
                            time:time, 
                            OTP: resultlocacheloOTP,
                            dayloth: dayth,
                            dayloen: dayen,  
                            timestamp:timestamp, 
                            timelostart:datenew, 
                            }
                // console.log('OTP', OTP); 
                return OTP
            // await client.disconnect();
        }
        async validateOTP(setData: any) {
            const keycache = setData.keycache; //  var otpvalchk = 'OTP_Auth_' + otpval + '_' + timestamp;
            const otpval = setData.otpval;
            const timestamp = setData.timestamp;
            const keycachedata = 'OTP_Auth_'+otpval;
            if (client === null) {
                 await ConnectionCache()  // Connection Redis
            } 
            const rsOTP = await promisify(client.get).bind(client)(keycachedata); // get data cache   
            const resultlocacheloOTP = JSON.parse(rsOTP);
            console.log('validateOTP otp val=>',otpval);
            console.log('validateOTP rs OTP=>', resultlocacheloOTP);
            console.log('validateOTP key=>',keycachedata);
            if (otpval == resultlocacheloOTP) {
                var status:number=1
            } else {
                var status:number=0
            }
            return status 
        }
        async Run(keycache: any) {  
            if (client === null) {
                 await ConnectionCache()  // Connection Redis
            }
            const time = 30;    
            const data = getRandomint(6);
            const keyotp = getRandomString(12);
            const key: any = 'True_plookpanya_OTP_'+keyotp+'_'+data;
            // console.log('Random int', data);
            // console.log('key otp',keyotp);
            await client.setex(key,time,JSON.stringify(data));  // set data cache 
            // console.log('keycache', key); 
            const result =await promisify(client.get).bind(client)(key); // get data cache
            const resultcache = JSON.parse(result);
            const run = {
                            key: key,
                            time:time, 
                            OTP:resultcache, 
                        }
            // console.log('run', run); 
            return run 
        }
}
function getRandomString(length: any) { 
  var randomChars: any =  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#';
  var result: any =  ''
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  }
  return result
}
function getRandomint(length: any) { 
  var randomChars: any =  '0123456789';
  var result: any =  ''
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length))
  }
  return result
}
function toThaiDate(date: any) { 
  let monthNames = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."]; 
      let year = date.getFullYear() + 543;
      let month = monthNames[date.getMonth()];
      let numOfDay = date.getDate();
      let hour = date.getHours().toString().padStart(2, "0");
      let minutes = date.getMinutes().toString().padStart(2, "0");
      let second = date.getSeconds().toString().padStart(2, "0");
      return `${numOfDay} ${month} ${year} ` +`${hour}:${minutes}:${second} น.`;
}
function toEnDate(date: any) { 
      let monthNames = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."]; 
      let monthNameslong = ["January", "February", "March.", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
          let year = date.getFullYear()+ 0;
          let month = monthNameslong[date.getMonth()];
          let numOfDay = date.getDate();
          let hour = date.getHours().toString().padStart(2, "0");
          let minutes = date.getMinutes().toString().padStart(2, "0");
          let second = date.getSeconds().toString().padStart(2, "0");
          return `${numOfDay} ${month} ${year} ` +`${hour}:${minutes}:${second}`;
}