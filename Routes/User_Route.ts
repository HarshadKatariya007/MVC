import Router from 'express';
import {Get,Get_User,Create_User, Update_User, Delete_User, Index_Page, Login_Page, Signup_Page, Login_user, Forgot_Page} from '../controller/User_Controller';
import { User_Check } from '../middleware/User_Check';
import { Upload } from '../middleware/Upload_File';

export const User_Route = Router()

User_Route.get('/demo',Get)
User_Route.get("/alluser",Get_User)
User_Route.get("/",Index_Page)
User_Route.get("/login",Login_Page)
User_Route.get("/signup",Signup_Page)
User_Route.get("/forgot",Forgot_Page)
User_Route.post("/",Upload.single('User_Profile'),User_Check,Create_User)
User_Route.post("/login",Login_user)
User_Route.put("/:id",Update_User)
User_Route.delete("/:id",Delete_User)
