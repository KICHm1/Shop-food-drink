import { NextApiRequest, NextApiResponse } from "next";

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
}
