import { Request, Response } from 'express';
import {User} from '../models/User_Model';
import path from "path";

export const Get = (req:Request,res:Response) =>
{
    res.send("Welcome To Test Route")
}

export const Get_User = async (req:Request,res:Response) =>
{
    let User_Get = await User.find()
    res.send(User_Get)
}

export const Create_User = async (req:Request,res:Response) =>
{
    let {Email} = req.body
    let Email_Find = await User.findOne({Email})
    if(Email_Find)
    {
        res.send({msg:'EMAIL ALREADY USE...'})
    }
    else
    {
        if(req.file)
            {
                req.body.Profile_Image = req.file.path
            }
        let User_Create = await User.create(req.body)
        res.send(User_Create)
    }    
}

export const Delete_User = async (req:Request,res:Response) =>
{
    let {id} = req.params
    let User_Delete = await User.findByIdAndDelete(id,req.body)
    res.send(User_Delete)
}

export const Update_User = async (req:Request,res:Response) =>
{
    let {id} = req.params
    let User_Update = await User.findByIdAndUpdate(id,req.body)
    res.send(User_Update)
}

export const Index_Page = async (req:Request,res:Response) =>
{
    res.render('index')
}

export const Login_Page = async (req:Request,res:Response) =>
{
    res.render('sign-in')
}
export const Signup_Page = async (req:Request,res:Response) =>
{
    res.render('sign-up')
}
export const Forgot_Page = async (req:Request,res:Response) =>
    {
        res.render('Forgot')
    }

export const Login_user = async (req:Request,res:Response) =>
{
    let {UserName,Password} = req.body
    let Login_User_Check = await User.findOne({UserName:UserName})
    if(!Login_User_Check)
    {
        res.send({msg:'USER NOT FOUND...'})
    }
    else if(Login_User_Check.Password !== Password)
    {
        res.send({msg:'INVALID PASSWORD...'})
    }
    else
    {
        res.send({msg:"LOGIN SUCCESSFULLY...."})
    }        
}
