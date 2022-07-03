import jwt  from "jsonwebtoken";

export const generateToken = (userId: any) => {
    return jwt.sign(userId, `${process.env.TOKEN_SECRET}`, { expiresIn: '86400000s' })
};

export const generateapikey = (apikey: any) => {
    return jwt.sign(apikey, `${process.env.TOKEN_SECRET}`, { expiresIn: '86400000s' })
};

export const generauser = (userdata: any) => {
    return jwt.sign(userdata, `${process.env.TOKEN_SECRET}`, { expiresIn: '86400000s' })
};

export const generstate = (int: any) => {
    var jwt = require('jsonwebtoken');
    var token = jwt.sign(int,`${process.env.TOKEN_SECRET}`, { expiresIn: '30s' }, { algorithm: 'HS256'})
    return token;
};
