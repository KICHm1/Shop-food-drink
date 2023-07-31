import { NextApiRequest, NextApiResponse } from "next";
import {user} from "../user"
<<<<<<< HEAD
import Source from "../source"
=======
>>>>>>> e79bc2d72e1615fdbfd7dccbb4d70a4c71205dad
export default function  handler(req:NextApiRequest , res: NextApiResponse ) {
    if(req.method ==='GET'){
        res.json(user);
    }
    else if (req.method ==='POST'){
    const comment = req.body;
    const comments = {
        id : user.length+1,
        user : comment
    }
    user.push(comments);
    res.status(201).json(comments);
<<<<<<< HEAD
    }
    
=======
 }
>>>>>>> e79bc2d72e1615fdbfd7dccbb4d70a4c71205dad
}
