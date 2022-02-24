import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config()

if (envFound.error) {
    // This error should crash whole process

    throw new Error("⚠️  Couldn't find .env file  ⚠️");   
}

export default {
    port: parseInt(<string>process.env.PORT, 10),
    databaseURL: process.env.MONGODB_RUI,
    api: {
        prefix: '/api',
    }
}
