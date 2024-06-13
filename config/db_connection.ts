import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()
export const Connect = async () =>
{
    let db_url:any = process.env.DB_URL
    await mongoose.connect(db_url)
    console.log("Connect Successful MongoDB...");
}    