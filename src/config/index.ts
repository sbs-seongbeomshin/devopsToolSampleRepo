import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config()
const dbURL = process.env.MONGODB_URI;
console.log(dbURL);
if (envFound.error) {
    // This error should crash whole process

    throw new Error("⚠️  Couldn't find .env file  ⚠️");   
}

export default {
    port: parseInt(<string>process.env.PORT, 10),
    databaseURL: dbURL,

    api: {
        prefix: '/api',
    },
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    }
}
