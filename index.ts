import express from 'express';
import {Connect} from './config/db_connection';
import dotenv from 'dotenv'
import {User_Route} from './Routes/User_Route';
import path from 'path';
dotenv.config()

let port = process.env.PORT || 9000
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))


/* EJS Setup */
app.set('view engine','ejs')
app.set('views',(__dirname + "/views"))
app.use(express.static("public"))
app.use("/upload",express.static(path.join(__dirname,"upload")))

app.use("/user",User_Route)  
app.listen(port,() =>
{
    console.log(`Server Is Running On Port http://localhost:${port}`);
    Connect()
}) 