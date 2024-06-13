import { Request} from 'express';
import multer from 'multer';
import path from 'path';

const Store:any = multer.diskStorage
({
    destination: "upload",
    filename: (req, file, cb) => {
     cb(null, Date.now()+file.originalname);
    }
});
const File_Upload_Check = (req:Request,file:any,cb:any) => 
{
    const ext:any = path.extname(file.originalname)
    if(ext!=='.png' && ext!=='.jpeg' && ext!=='.jpg')
    {
        cb(new Error('Only Allow .png,.jpeg Image....'))
    }
    else
    {
        cb(null,true)
    }
}
export const Upload:any = multer
({
    storage: Store,
    fileFilter: File_Upload_Check
})























// const File_Type_Check:any = (file:any,cb:any) =>
// {
//     const filetype:any = '/png'
//     const extname = filetype.test(path.extname(file.originalname).toLowerCase())
//     const mimetype = filetype.test(file.mimetype)

//     if(mimetype && extname)
//         {
//             cb(null,true)
//         }
//     else
//     {
//         cb({msg:"Only Allow IMage Type .png"})
//     }    
// }
 // fileFilter: function(file,cb)
    // {
    //     File_Type_Check(file,cb)
    // }