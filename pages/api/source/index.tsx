import { NextApiRequest, NextApiResponse } from "next";
import { main } from "../main";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises"
const folderImage = "/public/images";
export default async function Handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.json(main);
  } else if (req.method === "POST") {
    const comment = req.body;
    const comments = {
      id: main.length + 1,
      main: comment,
    };
    main.push(comments);
    res.status(201).json(comments);
  } else if (req.method === "PUT") {
    const contentsOld = req.body.old;
    const contentsNew = req.body.new;
    main.map(async (product: any, index: number) => {
      if (product.id == contentsOld.id) {
        (product.name = `${contentsNew.name}`),
          (product.detail = `${contentsNew.detail}`),
          (product.money = `${contentsNew.money}`),
          (product.id = `${contentsNew.name.replace(" ", "-")}`),
          (product.popular = contentsNew.popular)
          contentsNew.url ?  (product.url = `${contentsNew?.url}`) :null ;
          res.status(201).json({ index: index, product: product });
      }
    });
  } else if (req.method === "PATCH") {
    const contentsOld = req.body.old;
    main.map((product: any, index: number) => {
      if (product.id == contentsOld.id) {
        main.splice(index, 1);
        res.status(201).json({ index: index, product: undefined });
      }
    });
  }
}
