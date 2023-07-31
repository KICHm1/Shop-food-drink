import { NextApiRequest, NextApiResponse } from "next";
<<<<<<< HEAD
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
=======

export default function Handler(req: NextApiRequest, res: NextApiResponse) {
  res.json([
    { banner : false , popular : true, check: "food", url: "images/food-bowl.jpg", id: "Bowl", detail : "Đây là những món ngon tuyệt vời", money: "20000", name : "Bowl" },
    { banner : false , popular : false , check: "food", url: "images/food-macarons.jpg", id: "Macarons", detail : "Đây là những món ngon tuyệt vời", money: "25000", name : "Macarons" },
    { banner : false , popular : false , check: "food", url: "images/food-miaso.jpg", id: "Miaso", detail : "Đây là những món ngon tuyệt vời", money: "30000", name : "Miaso" },
    { banner : true , popular : true , check: "food", url: "images/food-pizza.jpg", id: "Pizza", detail : "Đây là những món ngon tuyệt vời", money: "22000", name : "Pizza" },
    { banner : true , popular : false , check: "drink", url: "images/drink-coffe.jpg", id: "Coffe", detail : "Đây là những món ngon tuyệt vời", money: "25000", name : "Coffe" },
    { banner : false , popular : false , check: "drink", url: "images/drink-cold-summer.jpg", id: "Cold-Summer", detail : "Đây là những món ngon tuyệt vời", money: "17000", name : "Cold Summer" },
    { banner : true , popular : false, check: "drink", url: "images/drink-fruit.jpg", id: "Fruit", detail : "Đây là những món ngon tuyệt vời", money: "25000", name : "Fruit" },
    { banner : true , popular : true, check: "drink", url: "images/drink-milk.jpg", id: "Milk", detail : "Đây là những món ngon tuyệt vời", money: "28000", name : "Milk" },
  ]);
>>>>>>> e79bc2d72e1615fdbfd7dccbb4d70a4c71205dad
}
