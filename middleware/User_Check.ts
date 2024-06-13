import { Request, Response,NextFunction } from "express";

export const User_Check = (req:Request,res:Response,next:NextFunction) =>
{
    let {UserName,Email,Password}= req.body

    if(!UserName || !Email || !Password)
    {
        res.status(400).send({msg:'Enter Valid Data...'})
    }
    else
    {
        next()
    }    
}