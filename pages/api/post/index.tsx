import { NextApiRequest, NextApiResponse } from "next";
import {user} from "../user"
import Source from "../source"
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
    }
    
}
