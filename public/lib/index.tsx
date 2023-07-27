const express = require('express')
const app = express();
app.use(express.json());
const datas = [
    { 
        "id" : 1,
        "check" : "food",
        "imgName": "images/food-bowl.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 2,
        "check" : "food",
        "imgName": "images/food-pizza.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 3,
        "check" : "food",
        "imgName": "images/food-macarons.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 4,
        "check" : "food",
        "imgName": "images/food-miaso.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 5,
        "check" : "food",
        "imgName": "images/food-bowl.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 6,
        "check" : "food",
        "imgName": "images/food-macarons.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 7,
        "check" : "drink",
        "imgName": "images/drink-coffe.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 8,
        "check" : "drink",
        "imgName": "images/drink-fruit.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
    { 
        "id" : 9,
        "check" : "drink",
        "imgName": "images/drink-milk.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      },
      { 
        "id" : 10,
        "check" : "drink",
        "imgName": "images/drink-cold-summer.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000 
      },
      { 
        "id" : 11,
        "check" : "drink",
        "imgName": "images/drink-coffe.jpg",
        "name": "Kala Bhuna",
        "detail":"We will deliver your food within 30 minutes in your town, If we would.",
        "money": 20.000
      }
]
app.get('/api/datas', (rep :any, res :any) =>{
    res.send(datas);
})
app.listen(3000, () => console.log('asdas'));