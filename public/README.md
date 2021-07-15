# fastify_template_mysql

- typescript
- typeorm
- knex.js
- jwt token
- json schema validation
- build swagger documentation from routes
- integration tests
  Vesion 1.0.0
  fastify_template_mysql  
  By kongnakorn jantakun  
  โดย คงนคร จันทะคุณ  
  email kongnakornjantakun@gmail.com

install app

npm i

run typescript
ren dev
npx nodemon

############
npm install pm2 -S
npm i pm2 install pm2-server-monit -S

# คำสั่งสำหรับแสดง process ทั้งหมดใน server PM2

pm2 list

# คำสั่งสำหรับแสดงรายละเอียด process

pm2 show <id|name|all>

# คำสั่ง restart process

pm2 restart <id|name|all>

# คำสั่ง stop process

pm2 stop <id|name|all>

# คำสั่งดูรายละเอียดของเครื่อง server และ process ที่ทำงาน

pm2 dash

build package

nmp run build

Complice Type to js

npx gulp
