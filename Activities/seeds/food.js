const { Food } = require('../models');

const foodData = [
    {
      "dish_name": "French Bread with Brie Cheese",
      "description": "French baguette with warm brie",
      "ingredients": "Ivan",
      "has_nuts": false
    },
    {
      "dish_name": "Cheese Plate with Spanish Chorizo",
      "description":
        "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
      "ingredients": "Isa",
      "has_nuts": true
    },
    {
      "dish_name": "Fish Tacos",
      "description":
        "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
      "ingredients": "Carlos",
      "has_nuts": false
    },
    {
      "dish_name": "Tropical Fruit Salad",
      "description": "Guava, papaya, pineapple, mango, and star fruit",
      "ingredients": "Sonia",
      "has_nuts": false
    },
    {
      "dish_name": "Pork Gyoza",
      "description":
        "Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce",
      "ingredients": "Karissa",
      "has_nuts": true
    },
    {
      "dish_name": "Yebeg Tibs with Injera Bread",
      "description":
        "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
      "ingredients": "Paulette",
      "has_nuts": false
    },
    {
      "dish_name": "Cape Malay Curry",
      "description": "Chicken and vegitable curry dish with basmati rice",
      "ingredients": "Samuel",
      "has_nuts": false
    }
  ]

const seedFood = () => Food.bulkCreate(foodData);
module.exports = seedFood;

