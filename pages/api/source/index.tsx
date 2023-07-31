import { NextApiRequest, NextApiResponse } from "next";
import { main } from "../main";
export default function Handler(req: NextApiRequest, res: NextApiResponse) {
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
    const contents = req.body;
    main.map((product: any, index: number) => {
      if (product.id == contents.id) {
        (product.name = `${contents.name}`),
          (product.detail = `${contents.detail}`),
          (product.money = `${contents.money}`),
          (product.id = `${contents.name.replace(" ","-")}`);
      }
    });
    res.status(201).json(contents);
  }
}
