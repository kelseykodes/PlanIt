const { Drinks } = require('../models');

const drinksData = [
    {
      "drink_name": "French Bread with Brie Cheese",
      "description": "French baguette with warm brie",
      "ingredients": "Ivan",
      "isAlcoholic": true
    },
    {
      "drink_name": "Cheese Plate with Spanish Chorizo",
      "description":
        "Manchego, Iberico, Cabrales, fig jam, grapes, pecans, and Spanich Chorizo",
      "ingredients": "Isa",
      "isAlcoholic": false
    },
    {
      "drink_name": "Fish Tacos",
      "description":
        "Battered/fried fish, corn tortillas, fresh slaw with jalepenos and cilantro, pickled red onion",
      "ingredients": "Carlos",
      "isAlcoholic": true
    },
    {
      "drink_name": "Tropical Fruit Salad",
      "description": "Guava, papaya, pineapple, mango, and star fruit",
      "ingredients": "Sonia",
      "isAlcoholic": true
    },
    {
      "drink_name": "Pork Gyoza",
      "description":
        "Homemade japanese dumplings stuffed with a pork and green onion filling, served with peanut dipping sauce",
      "ingredients": "Karissa",
      "isAlcoholic": false
    },
    {
      "drink_name": "Yebeg Tibs with Injera Bread",
      "description":
        "Marinated lamb dish with rosemary, garlic, onion, tomato, jalapeño and the East African spice berbere",
      "ingredients": "Paulette",
      "isAlcoholic": true
    },
    {
      "drink_name": "Cape Malay Curry",
      "description": "Chicken and vegitable curry dish with basmati rice",
      "ingredients": "Samuel",
      "isAlcoholic": true
    }
  ]

const seedDrink = () => Drinks.bulkCreate(drinksData);
module.exports = seedDrink;
