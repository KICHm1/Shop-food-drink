import { NextApiRequest, NextApiResponse } from "next";
import { contentComment } from "../content";
export default function  handler(req:NextApiRequest , res: NextApiResponse ) {
    if(req.method ==='GET'){
        res.json(contentComment);
    }
    else if (req.method ==='POST'){
    const comment : any = req.body;
    contentComment.unshift(comment);
    res.status(201).json(comment);
 }
}
