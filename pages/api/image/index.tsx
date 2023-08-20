import { NextApiHandler, NextApiRequest } from "next"
import formidable from "formidable";
import path from "path";
import fs from "fs/promises"
export const config = {
    api :{
        bodyParser : false
    }
}
const readFile = (
    req: NextApiRequest,
    saveLocally: Boolean,
    name : string
  ): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
    const option: formidable.Options = {};
    if(saveLocally){
      option.uploadDir = path.join(process.cwd(), "/public/images");
      option.filename  = (name, ext, path, form): any =>  path.originalFilename;
    }
    const form = formidable(option);
    return new Promise((resovle, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resovle({ fields, files });
      });
    });
};

const  Handler : NextApiHandler = async (req, res) =>{
    try{
        await fs.readdir(path.join(process.cwd() +  "/public", "/images"))
      } catch (error) {
        await fs.mkdir(path.join(process.cwd() + "/public", "/images"))
      } 
      await  readFile(req, true, req.body?.name) 
      res.json({done : "ok"})
      
}
export default Handler ;